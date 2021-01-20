/// <reference types="svelte" />

export interface HeadActionsProps {}

export default class HeadActions {
  $$prop_def: HeadActionsProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
