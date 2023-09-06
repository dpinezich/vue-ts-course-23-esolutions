# Preparation for Training

Please walk through the Preparation Exercise to make sure your environment is ready for the course.
Please contact us if there is any issue completing this before the training.

## Required software

You may install the following software and configure it as described, according to your preferences.

Disclaimer: Possible conflicts with existing software, configuration or policies can occur - any installation, configuration or other step described in this document is at your discretion.

__If there are any questions or difficulties during the installation don't hesitate to contact us.__

* Node.js - Long Term Support (v18.16.0 / v16.17.0) Version
    * Download and Installation from: <https://nodejs.org/en/>
    * We recommend to use a node version manager if you plan to use node.js/npm more often:
        * For macOS, Linux, Unix and Windows with WSL https://github.com/nvm-sh/nvm
        * For Windows without WSL: https://github.com/coreybutler/nvm-windows (not tested by us)
        * Install the LTS Node.js version using `nvm install` and `nvm use` (check nvm documentation)
        * (Side note: you can create a .nvmrc to define separate versions for each project)
* npm - Package manager
    * Will be installed with Node.js (npm is available on the command line).
* yarn - Package manager (optional)
  `npm install --global yarn`
* GIT for version control - <https://git-scm.com/>
* @vue/cli
    * Install by executing the following command: `npm init vue@latest`
* Option 1: WebStorm or PhpStorm
    * WebStorm or PhpStorm Extensions
        * Vue.js
        * IntelliVue (Incompatible with the newest Version of IntelliJ an update is expected)
        * Vue Component Creator
        * Prettier
        * Optional: Emmet Everywhere
        * Optional: Run Configuration for TypeScript
* Option 2: Visual Studio Code - <https://code.visualstudio.com/>
    * Install "code" command in your PATH variable
        * For macOS and Linux Press cmd+shift+p or ctrl+shift+p in vscode and then select 'Shell Command: install "code" in PATH'
        * On Windows this will be done by the installation exe
    * Visual Studio Code Extensions:
        * Volar, https://marketplace.visualstudio.com/items?itemName=vue.volar
        * Vetur (rather for Vue2, can be omitted for Vue3), https://marketplace.visualstudio.com/items?itemName=octref.vetur
        * Optional: VueDX, https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features
        * Optional: Vue VSCode Snippets, https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets
        * ESLint (automatic linting of code)
        * Chrome Debugger (opens chrome and allows in editor breakpoints)
        * vscode-icons (easier to separate icons for different file types with the same extension, ie. testing)
* Chrome Browser (optional)
    * [Vue.js DevTools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
* On windows:
    * It's easier to use Git Bash instead of Powershell/CMD.exe: https://gitforwindows.org/

## `gitlab.letsboot.com` account

- https://gitlab.letsboot.com will be used to access the course material.
- Please fill in the preparation questionnaire as linked in the registration confirmation mail. In the questionnaire you'll be asked which E-Mail address we may use to invite you to your `gitlab.letsboot.com` account.
- You'll receive an invitation to log in to your `gitlab.letsboot.com` account 1-2 working days before the course.

## Preparation Exercise

After installing the software from above, please walk through this exercise on your device, to make sure you can create, edit and run a Vue project:

1. Install required software as described above according to your preferences

2. Generate a minimal Vue App to test your setup:

3. Open the command line, go to a folder you want to create your projects in (ie. `cd ~/Desktop/`) and run:

    1. Run in your bash/terminal `npm init vue@latest`

    2. Create a new project with name `example`

    3. Select
    * `Add TypeScript: Yes`,
    * `Add JSX Support: No`,
    * `Add Vue Router for Single Page Application development?: Yes`,
    * `Add Pinia for state management?: Yes`,
    * `Add Vitest for Unit Testing?: Yes`,
    * `Add an End-to-End Testing Solution?: No`,
    * `Add ESLint for code quality?: Yes`,
    * `Add Prettier for code formatting?: Yes`,

4. Open the vue project with WebStorm, PhpStorm or Visual Studio Code

5. Run `npm install`

6. As a first test, run the default unit tests with the command `npm run test:unit`

7. In the same directory run the command `npm run format` and `npm run dev` to serve the new project on a local development web server

8. Open the new example app in your browser: http://127.0.0.1:5173/ (port may differ)

9. Apply some visible change to the code to see how the app is updated in your browser:

    1. Open the file `src/components/HelloWorld.vue`

    2. Remove all the code in this HelloWorld.vue between the `<template></template>` tag

    3. Add one line `<h1>{{title}}</h1>` in the `<template></template>` block

    4. Change the name of the `defineProps msg` to `defineProps title`

    5. Open HelloWorld.spec.ts and change `msg` to `title`

    6. Open the file `App.vue` and change the value for the msg property handed over to the `<HelloWorld>` component to `title="My first Vue app"` (please also check if you get the auto-suggestion while writing title)

    7. Go back to your browser which should have refreshed http://127.0.0.1:5173/ (port may differ) with the ouptut "My first Vue app"

10. Close your IDE and terminate the `running npm run dev` session

11. Additionally, you can double-check if your vitest still works: `npm run test:unit` (remember we changed it as well :-) )

==> If there is any error during this exercise or something doesn't show as described please contact us.
