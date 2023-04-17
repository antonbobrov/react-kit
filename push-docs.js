const { execSync } = require('node:child_process');
const fs = require('fs');

fs.cpSync('./apps/react-components/storybook-static/', './build-docs/', { recursive: true });
fs.cpSync('./apps/react-hooks/docs/', './build-docs/react-hooks/', { recursive: true });
fs.cpSync('./apps/react-vevet-hooks/docs/', './build-docs/react-vevet-hooks/', { recursive: true });

execSync('git add ./build-docs/');
execSync('git commit -m "Build docs"');

execSync('git subtree split --prefix build-docs -b docs-temp -d');
execSync('git push -f --no-verify origin docs-temp:docs');
execSync('git branch -D docs-temp');

execSync('git reset --hard HEAD~1');