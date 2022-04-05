import { readFile, writeFile, copyFile } from 'fs/promises';

const PROJECT_NAME = 'shipthisapi-js';

(async () => {
  const packageJson = await readFile('./package.json', { flag: 'r+', encoding: 'utf-8' });
  const packageObj = JSON.parse(packageJson);

  const libraryJson = await readFile('./library.json', { flag: 'r+', encoding: 'utf-8' });
  const libraryObj = JSON.parse(libraryJson);

  const libraryPackageObj = { ...packageObj, ...libraryObj };
  const deleteList = [
    'type',
    'scripts',
    'dependencies',
    'devDependencies',
    'volta',
  ];
  for (const property in libraryPackageObj) {
    if (deleteList.includes(property)) {
      delete libraryPackageObj[property];
    }
  }

  await writeFile(
    `./dist/${PROJECT_NAME}/package.json`,
    JSON.stringify(libraryPackageObj, undefined, 2),
    { flag: 'w+' }
  );

  const filesToCopyFromRoot = ['README.md', 'LICENSE'];
  filesToCopyFromRoot.forEach(async (file) => await copyFile('./' + file, `./dist/${PROJECT_NAME}/${file}`));
})()
