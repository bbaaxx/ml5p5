import "./styles.css";
import ml5 from "ml5";

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

const getGuessTitle = (titles: string[] = []): string =>
  titles[Math.floor(Math.random() * titles.length)];

const imageLoadHandler =
  ({ controls, guessCopy, document, hiddenClass, classifier, imageElement }) =>
  (e) => {
    // create a list
    const list = document.createElement("ol");
    controls.classifyOutput.replaceChildren(list);

    // get classifier results
    classifier.classify(e.target).then((results) => {
      // map the results to the elements on the list
      results
        .map((r) => {
          const li = document.createElement("li");
          li.append(`${r.label}`);
          return li;
        })
        .forEach((e) => list.appendChild(e));
    });

    // display the results card
    controls.robbiesGuess.replaceChildren(getGuessTitle(guessCopy));
    controls.imageOutput.replaceChildren(imageElement);
    controls.resultsCard.classList.remove(hiddenClass);
  };

const inputChangeHandler =
  ({ controls, guessCopy, document, hiddenClass, classifier }) =>
  async (evt: HTMLInputEvent) => {
    const [targetFile] = Array.from(evt.target.files);
    if (targetFile) {
      // Clear the image container element
      controls.imageOutput.replaceChildren();

      // create an image element
      const imageElement: HTMLImageElement = document.createElement("img");
      imageElement.setAttribute("src", URL.createObjectURL(targetFile));
      imageElement.setAttribute("width", "400");
      imageElement.setAttribute("height", "400");

      // register classifier handle on image load
      imageElement.addEventListener(
        "load",
        imageLoadHandler({
          controls,
          classifier,
          imageElement,
          guessCopy,
          hiddenClass,
          document,
        })
      );
    }
  };

const main =
  ({ controls, guessCopy, document, hiddenClass }) =>
  async () => {
    // Initialize Classifier and remove spinner
    const classifier = await ml5.imageClassifier("MobileNet");
    controls.modelSpinner.classList.add(hiddenClass);
    controls.fileUploadForm.classList.remove(hiddenClass);

    controls.fileInput.addEventListener(
      "change",
      inputChangeHandler({
        controls,
        classifier,
        guessCopy,
        document,
        hiddenClass,
      })
    );
  };

const hidden = "is-hidden";
const copy = [
  "This looks like a:",
  "Maybe is a:",
  "Could be a:",
  "I think it is:",
  "Got it, is a:",
];
const myControls: { [key: string]: HTMLElement } = {
  // Get all elements and toggles
  fileInput: document.querySelector("#file-upload-input"),
  imageOutput: document.querySelector("#image-output"),
  resultsCard: document.querySelector("#results-card"),
  robbiesGuess: document.querySelector("#robbies-guess"),
  classifyOutput: document.querySelector("#classify-output"),
  modelSpinner: document.querySelector("#model-spinner"),
  fileUploadForm: document.querySelector("#file-upload-form"),
};

document.body.onload = () =>
  main({
    controls: myControls,
    guessCopy: copy,
    hiddenClass: hidden,
    document,
  })().catch(console.error);
