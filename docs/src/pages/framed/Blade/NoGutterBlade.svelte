<script>
  import { Button, Blade, Content } from "carbon-components-svelte";

  let open = false;
</script>

<Content>
  <h1>Text</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu quam,
    mattis at mauris in, eleifend condimentum nisi. Orci varius natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eu
    ex dui. Curabitur vitae justo a felis sollicitudin scelerisque.
  </p>
  <Button on:click="{() => (open = !open)}">
    {open ? 'Close' : 'Open'}
    Blade
  </Button>
</Content>

<Blade bind:open noGutter>
  <p>Create a new Cloudant database in the US South region.</p>
</Blade>
