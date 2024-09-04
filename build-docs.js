const fs = require('fs');

fs.cpSync('./apps/react-components/storybook-static/', './build-docs/', { recursive: true });
fs.cpSync('./apps/react-hooks/docs/', './build-docs/react-hooks/', { recursive: true });
fs.cpSync('./apps/react-vevet-hooks/docs/', './build-docs/react-vevet-hooks/', { recursive: true });
fs.cpSync('./apps/react-dat-gui/docs/', './build-docs/react-dat-gui/', { recursive: true });
