import { pipe } from "fp-ts/lib/function";
import { Reader, ask, chain } from "fp-ts/lib/Reader";
import { Dependencies, HTMLInputEvent } from "../types";
import { imageLoadHandler } from "./imageLoad";

export const fileChangeHandler = (
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
