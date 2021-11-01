import { Reader } from "fp-ts/lib/Reader";
import { Dependencies } from "../types";

const getGuessTitle = (titles: string[] = []): string =>
  titles[Math.floor(Math.random() * titles.length)];

export const imageLoadHandler =
  (imageElement: HTMLImageElement): Reader<Dependencies, (e: Event) => void> =>
  ({ controls, guessCopy, document, hiddenClass, classifier }) =>
  (e: Event) => {
    const list = document.createElement("ol");
    controls.classifyOutput.replaceChildren(list);
    classifier.classify(e.target).then((results) => {
      results
        .map((r) => {
          const li = document.createElement("li");
          li.append(`${r.label}`);
          return li;
        })
        .forEach((e) => list.appendChild(e));
    });
    controls.robbiesGuess.replaceChildren(getGuessTitle(guessCopy));
    controls.imageOutput.replaceChildren(imageElement);
    controls.resultsCard.classList.remove(hiddenClass);
  };
