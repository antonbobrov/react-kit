# React hooks for dat.gui

React adaptation of [dat.GUI](https://www.npmjs.com/package/dat.gui)

## See [Docs](https://antonbobrov.github.io/react-kit/react-dat-gui)

## Installation

```bash
npm i "@anton.bobrov/react-dat-gui"
```

## Create a single dat.GUI folder

```ts
const folder = useDatGUIFolder({ name: 'folder name' });
```

## Create settings

```ts
const gui = useDatGUISettings({
  name: 'settings folder',
  isOpen: true,
  source: {
    isEnabled: true,
    ease: 1,
    color: 0xff00ff,
  },
  controls: [
    { name: 'isEnabled', type: 'boolean' },
    { name: 'ease', type: 'number', min: 0, max: 1, step: 0.01 },
    { name: 'color', type: 'color' },
  ],
  onChange(object) {
    console.log(object);
  },
});
```