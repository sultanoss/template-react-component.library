# basic setup

1. npm init.
2. use default setup configuraion // override later in json.config file.
3. create src folder and subfolders (src/components/Button).
4. create in the Button folder a Button.tsx file (for the Button Component).
5. create in the Button component an index.ts file (for exporting the Button components without writing the complet path.).
6. npm install react typescript @types/react --save-dev
7. create an index.ts file in the components folder to export all the components in the components folder.
8. create an index.ts file in the src folder to export everything in the components folder.

# bundel into a library that we can publish (roll up)

9. initialize typescript in a project (npx tsc --init) it creates a tsconfig.json file.
10. configure tsconfig.json file.
11. install rollup (npm install rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts --save-dev).
12. create a rollup.config.js file in the root directory.
13. configure the rollup.config.js.
14. configure the package.json file.
15. npm run rollup.

# error [!] (plugin typescript) Error: @rollup/plugin-typescript: Could not find module 'tslib', which is required by this plugin. Is it installed?

solved: npm i -D tslib

# [!] Error: Could not resolve entry module (dist/esm/types/index.d.ts).

solved: Change dist/esm/types/index.d.ts -> dist/esm/index.d.ts in rollup.config.js

16.
