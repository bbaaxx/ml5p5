import "./styles.css";
import { main } from "./handlers/main";

const hiddenClass = "is-hidden";

const guessCopy = [
  "This looks like a:",
  "Maybe it is a:",
  "Could be a:",
  "I think it is:",
  "Got it, it is a:",
];

const controls: { [key: string]: HTMLElement } = {
  fileInput: document.querySelector("#file-upload-input"),
  imageOutput: document.querySelector("#image-output"),
  resultsCard: document.querySelector("#results-card"),
  robbiesGuess: document.querySelector("#robbies-guess"),
  classifyOutput: document.querySelector("#classify-output"),
  modelSpinner: document.querySelector("#model-spinner"),
  fileUploadForm: document.querySelector("#file-upload-form"),
};

main(document)({
  controls,
  guessCopy,
  hiddenClass,
});
