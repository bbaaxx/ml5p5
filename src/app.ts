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

const controlIds: { [key: string]: string } = {
  fileInput: "#file-upload-input",
  imageOutput: "#image-output",
  resultsCard: "#results-card",
  robbiesGuess: "#robbies-guess",
  classifyOutput: "#classify-output",
  modelSpinner: "#model-spinner",
  fileUploadForm: "#file-upload-form",
};

const controls: { [key: string]: HTMLElement } = Object.fromEntries(
  Object.entries(controlIds).map(([key, value]) => [
    key,
    document.querySelector(value),
  ])
);

main(document)({
  controls,
  guessCopy,
  hiddenClass,
});
