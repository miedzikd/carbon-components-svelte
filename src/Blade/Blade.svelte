<script>
  import Grid from "../Grid/Grid.svelte";
  import Button from "../Button/Button.svelte";
  import Close32 from "carbon-icons-svelte/lib/Close32";
  import { slimscroll } from "svelte-slimscroll";

  /** Set to `true` to open the modal */
  export let open = false;

  /** Set to `true` to remove the gutter */
  export let noGutter = false;

  /** Set top offset so as not to cover the header, for example */
  /**
   * Set the flexDirection of the head
   * @type {string}
   */
  export let marginTop = undefined;

  let contentWrapperHeight = 0;

  $: console.log(
    contentWrapperHeight,
    $$slots.footer,
    contentWrapperHeight - (50 * $$slots.footer ? 1 : 0)
  );
</script>

<style>
  .blade {
    display: var(--display);
    flex-direction: column;
    height: 100%;
    width: 800px;
    position: fixed;
    z-index: 1;
    top: var(--marginTop, 0px);
    right: 0;
    background-color: #f4f4f4;
    overflow: hidden;
    transition: 0.5s;

    -webkit-box-shadow: -5px 0px 17px -1px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -5px 0px 17px -1px rgba(0, 0, 0, 0.3);
    box-shadow: -5px 0px 17px -1px rgba(0, 0, 0, 0.3);
  }

  .actions {
    display: flex;
    flex-direction: row-reverse;
  }

  .content-wrapper {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .content {
    flex-grow: 1;
  }

  @media (max-width: 800px) {
    .blade {
      width: 100%;
      max-width: 800px;
    }
  }
</style>

{@html `<style ✂prettier:content✂="CiAgICAjbWFpbi1jb250ZW50IHsKICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gY2FsYyg4MDBweCAqICR7b3BlbiA/IDEgOiAwfSkpCiAgICB9Cg=="></style>`}
<div
  class:blade="{'true'}"
  style="--display: {open ? 'flex' : 'none'}; --marginTop: {marginTop || ''}"
>
  <div class:actions="{'actions'}">
    <Button
      hasIconOnly
      tooltipPosition="left"
      tooltipAlignment="center"
      iconDescription="Close"
      icon="{Close32}"
      on:click="{() => {
        open = false;
      }}"
    />
  </div>
  {#if $$slots.header}
    <Grid style="width: 100%" noGutter="{noGutter}">
      <slot name="header" />
    </Grid>
  {/if}
  <div class="content-wrapper" bind:clientHeight="{contentWrapperHeight}">
    <div
      use:slimscroll="{{ height: `${contentWrapperHeight - (50 * $$slots.footer ? 1 : 0)}px`, width: `100%`, color: '#8c8984', distance: '3px', wheelStep: 8 }}"
    >
      <Grid style="width: 100%" noGutter="{noGutter}">
        <slot />
      </Grid>
    </div>
  </div>
  {#if $$slots.footer}
    <slot name="footer" />
  {/if}
</div>
