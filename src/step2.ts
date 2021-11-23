import "./styles.css";
import ml5 from "ml5";
import { pipe } from "fp-ts/lib/function";
import { Reader, ask, chain } from "fp-ts/lib/Reader";

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

const getGuessTitle = (titles: string[] = []): string =>
  titles[Math.floor(Math.random() * titles.length)];

const imageLoadHandler =
  (imageElement: HTMLImageElement): Reader<Dependencies, (e: Event) => void> =>
  ({ controls, guessCopy, document, hiddenClass, classifier }) =>
  (e: Event) => {
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

const inputChangeHandler = (
  classifier: any
): Reader<Dependencies, (e: Event) => Promise<void>> =>
  pipe(
    ask<Dependencies>(),
    chain(
      (dependencies) =>
        ({ controls, document }) =>
        async (evt: HTMLInputEvent) => {
          const [targetFile] = Array.from(evt.target.files);
          if (targetFile) {
            controls.imageOutput.replaceChildren();
            const imageElement: HTMLImageElement =
              document.createElement("img");

            imageElement.setAttribute("src", URL.createObjectURL(targetFile));
            imageElement.setAttribute("width", "400");
            imageElement.setAttribute("height", "400");

            imageElement.addEventListener(
              "load",
              imageLoadHandler(imageElement)({ ...dependencies, classifier })
            );
          }
        }
    )
  );

const main = (document: Document): Reader<Dependencies, Promise<void>> =>
  pipe(
    ask<Dependencies>(),
    chain((dependencies) => async ({ controls, hiddenClass }) => {
      const classifier = await ml5.imageClassifier("MobileNet");
      controls.modelSpinner.classList.add(hiddenClass);
      controls.fileUploadForm.classList.remove(hiddenClass);
      controls.fileInput.addEventListener(
        "change",
        inputChangeHandler(classifier)({ ...dependencies, document })
      );
    })
  );

const hidden = "is-hidden";
const copy = [
  "This looks like a:",
  "Maybe is a:",
  "Could be a:",
  "I think it is:",
  "Got it, is a:",
];
const myControls: { [key: string]: HTMLElement } = {
  fileInput: document.querySelector("#file-upload-input"),
  imageOutput: document.querySelector("#image-output"),
  resultsCard: document.querySelector("#results-card"),
  robbiesGuess: document.querySelector("#robbies-guess"),
  classifyOutput: document.querySelector("#classify-output"),
  modelSpinner: document.querySelector("#model-spinner"),
  fileUploadForm: document.querySelector("#file-upload-form"),
};

type Dependencies = {
  controls: { [key: string]: HTMLElement };
  guessCopy: string[];
  hiddenClass: string;
  document: Document;
  classifier?: any;
  imageElement?: HTMLImageElement;
};

main(document)({
  controls: myControls,
  guessCopy: copy,
  hiddenClass: hidden,
  document,
});
