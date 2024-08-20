# React hooks for dat.gui

React adaptation of [dat.GUI](https://www.npmjs.com/package/dat.gui)

## See [Docs](https://antonbobrov.github.io/react-kit/react-dat-gui)

## Installation

```bash
npm i "@anton.bobrov/react-dat-gui"
```

## Create a single dat.GUI folder

```ts
const folder = useDatGuiFolder({ name: 'folder name' });
```

## Create settings

```ts
const gui = useDatGuiSettings({
  name: 'GUI Folder',
  parent: folder,
  data: {
    color: 0xff0000,
    intensity: 0.5,
    isVisible: true,
  },
  parameters: {
    color: { type: 'color' },
    intensity: { type: 'number', min: 0, max: 1, step: 0.1 },
    isVisible: { type: 'boolean' },
  },
  onChange(current) {
    console.log(defaults, current);
  },
});
```

## Disable dat.GUI
To disable dat.GUI, add this code to `head` tag

```html
<script>
  window.USE_DAT_GUI = false;
</script>
```

## Global settings
```html
<script>
  window.OPEN_DAT_GUI = true;
</script>
```