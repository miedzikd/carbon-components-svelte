/// <reference types="svelte" />

export interface BladeProps {
  /**
   * Set to `true` to open the modal
   * @default false
   */
  open?: boolean;

  /**
   * Set to `true` to remove the gutter
   * @default false
   */
  noGutter?: boolean;

  /**
   * Set the flexDirection of the head
   */
  marginTop?: string;
}

export default class Blade {
  $$prop_def: BladeProps;
  $$slot_def: {
    default: {};
    footer: {};
    header: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
