export type Dependencies = {
  controls: { [key: string]: HTMLElement };
  guessCopy: string[];
  hiddenClass: string;
  document?: Document;
  classifier?: any;
  imageElement?: HTMLImageElement;
};

export interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
