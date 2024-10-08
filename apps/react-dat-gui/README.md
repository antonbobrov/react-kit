# `@anton.bobrov/react-dat-gui`

React adaptation of [dat.GUI](https://www.npmjs.com/package/dat.gui), a lightweight graphical user interface for changing variables in JavaScript. This library allows easy integration of dat.GUI into your React applications with a simple API.

### Links
- [Documentation](https://antonbobrov.github.io/react-kit/react-dat-gui/)
- [Changelog](https://github.com/antonbobrov/react-kit/blob/develop/apps/react-dat-gui/CHANGELOG.md)

## Installation

To install the package, use npm:

```bash
npm i "@anton.bobrov/react-dat-gui"
```

## React Usage

### Creating a Folder

You can create a dat.GUI folder in your React component using the `useDatGuiFolder` hook:

```ts
const folder = useDatGuiFolder({ name: 'GUI Folder' });
```

### Creating Settings

You can define GUI settings and parameters using the `useDatGuiSettings` hook:

```ts
const { defaults } = useDatGuiSettings({
  name: 'GUI Folder',
  parent: guiParentFolder, // To nest the settings under a parent folder
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

## Vanilla JavaScript Usage

## Accessing dat.GUI

You can access the dat.GUI instance using the `datGUI` promise:

```ts
datGUI.then((gui) => {
  if (gui) {
    // Use dat.GUI
  }
});
```

### Creating a Folder

To create a folder using vanilla JavaScript:

```ts
const instance = createDatGuiFolder({
  name: 'GUI Folder',
  onCreate: (folder) => console.log(folder),
});

// Destroy the folder when needed
instance.destroy();
```

### Creating Settings

To create GUI settings and configure their parameters:

```ts
const instance = createDatGuiSettings({
  name: 'GUI Folder',
  parent: guiParentFolder, // To nest settings under a parent folder
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
    console.log(instance.defaults, current);
  },
});

// Destroy the settings when needed
instance.destroy();
```

## Disabling dat.GUI

To disable dat.GUI, you can add the following script to your HTML `<head>` section:

```html
<script>
  window.USE_DAT_GUI = false;
</script>
```

## Global Settings

If you want to keep the dat.GUI panel open by default, use the following script:

```html
<script>
  window.OPEN_DAT_GUI = true;
</script>
```