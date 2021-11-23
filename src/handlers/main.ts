import ml5 from "ml5";
import { pipe } from "fp-ts/lib/function";
import { Reader, ask, chain } from "fp-ts/lib/Reader";
import { Dependencies } from "../types";
import { fileChangeHandler } from "./fileChange";

const mainHandler =
  (dependencies: Dependencies) =>
  async ({ controls, hiddenClass }) => {
    const classifier = await ml5.imageClassifier("MobileNet");

    controls.modelSpinner.classList.add(hiddenClass);
    controls.fileUploadForm.classList.remove(hiddenClass);

    controls.fileInput.addEventListener(
      "change",
      fileChangeHandler(classifier)({ ...dependencies, document })
    );
  };

export const main = (): Reader<Dependencies, Promise<void>> =>
  pipe(ask<Dependencies>(), chain(mainHandler));
