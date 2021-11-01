import "./styles.css";
import ml5 from "ml5";

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
const hiddenClass = "is-hidden";

const robbiesGuesses = [
  "This looks like a:",
  "Maybe is a:",
  "Could be a:",
  "I think it is:",
  "Got it, is a:",
];

const getGuessTitle = (titles: string[] = []): string =>
  titles[Math.floor(Math.random() * titles.length)];

const main = async () => {
  // Get all elements and toggles
  const fileInput: HTMLInputElement =
    document.querySelector("#file-upload-input");
  const imageOutput: HTMLElement = document.querySelector("#image-output");
  const resultsCard: HTMLElement = document.querySelector("#results-card");
  const robbiesGuess: HTMLElement = document.querySelector("#robbies-guess");
  const classifyOutput: HTMLElement =
    document.querySelector("#classify-output");
  const modelSpinner: HTMLElement = document.querySelector("#model-spinner");
  const fileUploadForm: HTMLElement =
    document.querySelector("#file-upload-form");

  // Initialize Classifier and remove spinner
  const classifier = await ml5.imageClassifier("MobileNet");
  modelSpinner.classList.add(hiddenClass);
  fileUploadForm.classList.remove(hiddenClass);

  // Register onChange event on input
  fileInput.addEventListener("change", async (evt: HTMLInputEvent) => {
    const [targetFile] = Array.from(evt.target.files);
    if (targetFile) {
      // Clear the image container element
      imageOutput.replaceChildren();

      // create an image element
      const imageElement: HTMLImageElement = document.createElement("img");
      imageElement.setAttribute("src", URL.createObjectURL(targetFile));
      imageElement.setAttribute("width", "400");
      imageElement.setAttribute("height", "400");

      // register classifier handle on image load
      imageElement.addEventListener("load", (e) => {
        // create a list
        const list = document.createElement("ol");
        classifyOutput.replaceChildren(list);

        // get classifier results
        classifier.classify(e.target).then((results) =>
          // map the results to the elements on the list
          results
            .map((r) => {
              const li = document.createElement("li");
              li.append(`${r.label}`);
              return li;
            })
            .forEach((e) => list.appendChild(e))
        );

        // display the results card
        robbiesGuess.replaceChildren(getGuessTitle(robbiesGuesses));
        imageOutput.replaceChildren(imageElement);
        resultsCard.classList.remove(hiddenClass);
      });
    }
  });
};

document.body.onload = () => main().catch(console.error);
