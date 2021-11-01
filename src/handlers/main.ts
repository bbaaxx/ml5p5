import ml5 from "ml5";
import { pipe } from "fp-ts/lib/function";
import { Reader, ask, chain } from "fp-ts/lib/Reader";
import { Dependencies } from "../types";
import { fileChangeHandler } from "./fileChange";

export const main = (document: Document): Reader<Dependencies, Promise<void>> =>
  pipe(
    ask<Dependencies>(),
    chain((dependencies) => async ({ controls, hiddenClass }) => {
      const classifier = await ml5.imageClassifier("MobileNet");
      controls.modelSpinner.classList.add(hiddenClass);
      controls.fileUploadForm.classList.remove(hiddenClass);

      controls.fileInput.addEventListener(
        "change",
        fileChangeHandler(classifier)({ ...dependencies, document })
      );
    })
  );
