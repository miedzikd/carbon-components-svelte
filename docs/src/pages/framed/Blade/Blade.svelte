<script>
  import {
    Button,
    Blade,
    Content,
    Head,
    HeadIdentity,
  } from "carbon-components-svelte";

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

<Blade bind:open>
  <div slot="header">
    <Head>
      <HeadIdentity title="Blade title" />
    </Head>
  </div>
  <p>This very long text is intended to show how blade content is scrolled</p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur
    dignissim ex, a euismod sem pellentesque eu. Proin condimentum hendrerit
    magna, laoreet efficitur ante placerat in. Maecenas dapibus nisl condimentum
    rhoncus sodales. Quisque vehicula nunc velit. Duis placerat velit sem.
    Pellentesque et urna sit amet nisl pellentesque semper. Praesent aliquet
    orci libero.
  </p>
  <p>
    Curabitur porta, ex in sagittis tristique, elit nisl vestibulum sem, a
    vehicula purus ligula vitae ligula. Suspendisse consectetur, tellus sit amet
    laoreet sagittis, diam est tristique est, vel blandit est urna quis lectus.
    Sed tincidunt augue purus, vitae faucibus magna volutpat tincidunt. Aliquam
    pellentesque metus in tincidunt tempor. Donec porta, enim et euismod varius,
    erat eros tincidunt lacus, vitae posuere nulla justo tincidunt justo. Nam
    ipsum lectus, venenatis vulputate urna eu, viverra commodo massa. Ut eu
    venenatis quam, sed fringilla mi. In pellentesque nisi ut nisl finibus, et
    consectetur nunc vulputate. Donec commodo, nunc vitae scelerisque mattis,
    eros turpis ornare augue, at consectetur purus lacus ut odio. Quisque
    lacinia laoreet finibus. Pellentesque sit amet sodales turpis.
  </p>
  <p>
    In egestas enim eu ultricies pharetra. Nunc vitae convallis mi, nec tempus
    velit. Nunc interdum sem eu maximus interdum. Integer id lorem vel urna
    sollicitudin fermentum vitae vitae nisl. Curabitur et fringilla metus. Sed
    blandit nisl et augue auctor, nec luctus neque egestas. Vivamus vulputate
    suscipit laoreet. Nulla dapibus ac nulla at porttitor. Interdum et malesuada
    fames ac ante ipsum primis in faucibus. Integer mattis ullamcorper quam vel
    commodo. Donec nunc magna, molestie eu nunc sit amet, molestie malesuada
    arcu. Suspendisse tristique consequat felis, molestie pulvinar urna porta
    ac. Aenean pulvinar lectus ac vulputate dapibus.
  </p>
  <p>
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. Donec dignissim at sapien sit amet maximus. Pellentesque
    orci eros, auctor eu consectetur ut, iaculis ut nisi. Nulla quis lacinia
    massa. Aenean tempus consectetur lorem, eu aliquet quam viverra et.
    Suspendisse cursus mi non mi volutpat, sed hendrerit metus fringilla. Sed
    nec ipsum sed metus tincidunt ultricies.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
    pellentesque congue enim eget lacinia. Aliquam a rhoncus felis, quis egestas
    ipsum. Praesent at dolor sed tortor venenatis cursus. Donec placerat massa a
    placerat venenatis. Curabitur libero nunc, pretium id faucibus eget, rutrum
    eget lacus. Suspendisse tincidunt ipsum feugiat diam dapibus ullamcorper.
    Proin urna ex, congue id lectus nec, interdum congue mi. Sed non lorem vel
    turpis aliquet sodales. Nam commodo ligula sed elit fermentum congue.
    Maecenas euismod sapien mi, eu pulvinar tortor accumsan sit amet. Mauris at
    dui ut eros dictum imperdiet. In ullamcorper vehicula justo, eget accumsan
    est gravida ac. Ut volutpat tortor eget ornare porta. Vivamus porta
    pellentesque cursus.
  </p>
  <p>
    Duis luctus velit eget elit rhoncus luctus. Ut consequat sapien vel ex
    laoreet, tincidunt euismod sem sodales. Fusce malesuada massa et feugiat
    elementum. Nunc vitae luctus neque. Orci varius natoque penatibus et magnis
    dis parturient montes, nascetur ridiculus mus. Sed vitae condimentum arcu.
    Integer aliquet venenatis ex. Aenean eget lectus tristique, facilisis ipsum
    at, consequat velit.
  </p>
  <p>
    Nam condimentum leo nec nibh ornare egestas. Proin sed consectetur ante, eu
    cursus sapien. Vestibulum porttitor dolor ut viverra pellentesque. Mauris
    laoreet nec erat suscipit pharetra. Donec consectetur augue eu ante
    fermentum euismod. Nam quam mauris, congue a velit sed, congue tincidunt
    neque. Donec ut nunc tincidunt, tristique nulla nec, semper mi. Mauris
    vulputate turpis a leo aliquet, ac faucibus nibh ultricies.
  </p>
  <p>
    Suspendisse ac luctus orci. Vestibulum ut risus nec ipsum tempus accumsan
    quis quis nunc. Sed fermentum molestie nisl, eget sagittis eros convallis a.
    Sed viverra, lorem vel vulputate commodo, turpis orci sagittis neque, quis
    ullamcorper mauris nunc eu neque. Pellentesque rutrum porttitor eleifend.
    Phasellus lorem diam, maximus eget convallis a, suscipit nec ex. Aliquam
    erat volutpat. Sed lobortis risus nec tempus blandit. Vestibulum scelerisque
    purus vitae tortor dictum, gravida fringilla ligula laoreet. Donec fermentum
    sem cursus ligula eleifend, quis viverra tortor posuere. Vivamus efficitur
    posuere lorem et tristique. Curabitur pharetra accumsan ante. Quisque in
    varius dolor. Proin eu neque quis ex dignissim laoreet posuere vel orci.
    Quisque porttitor dui neque, id facilisis neque scelerisque ac. Ut a purus
    suscipit, dapibus magna nec, egestas purus.
  </p>
  <div slot="footer" class="bx--modal-footer">
    <Button on:click="{() => (open = false)}" kind="secondary">Cancel</Button>
    <Button on:click="{() => (open = false)}">Save</Button>
  </div>
</Blade>
