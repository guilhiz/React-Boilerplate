<h1 align="center">My React Boilerplate with TypeScript</h1>


## :gear: Configs
- :rocket: Vite - A native ES modules development server and build tool.
- :wrench: ESLint — Pluggable JavaScript linter
- :art: Prettier — Opinionated Code Formatter
- :pencil: Commitzen — Git commit message helper
- :dog: Husky — Use git hooks with ease
- :no_entry_sign: Lint-staged - Run linters against staged git files
### Libs
- :globe_with_meridians: Axios — HTTP client library for JavaScript.
- :nail_care: Styled-components - library for styling React components.
- :clipboard: React-hook-form - lightweight library for building forms.
- :lock: Zod - TypeScript-first schema validation.

## :rocket: Getting Started

To use this boilerplate as a template for your own project, follow these steps:

  - Click on the `Use this template` button on this repository page to create a new repository from this template.
  - Choose a name and configure the new repository as desired.
  - Clone the newly created repository to your local machine with the following command in your terminal:

```shel
git clone https://github.com/<YOUR_USERNAME>/<YOUR_PROJECT_NAME>.git
```

After cloning the repository, run the following commands inside the project folder:
- Install the dependencies with `npm install`
- Start the project with `npm start`

## :file_folder: Main File Structure

```js
├── 📁.husky // Git hooks
|   
├── 📁src
|   ├── 📁@types // Type definitions
|   ├── 📁components // React components
|   ├── 📁hooks // Custom hooks
|   ├── 📁pages // Pages or screens
|   ├── 📁service // API services
|   ├── 📁styles  // Global styles
|   ├── 📁theme // Theme files
|   ├── 📁utils // General utilities
|   |   ├──📁constants // Global constants   
|   |   └──📁functions // Utility functions
|   |
|   └── 📄index.tsx // Main entry file
|
├── 📄.eslintrc.json // ESLint configuration file
├── 📄.prettierrc // Prettier configuration file
├── 📄Index.html // Entry point HTML file 
├── 📄README.md // Project documentation
├── 📄package.json // NPM package configuration file
├── 📄tsconfig.json // TypeScript configuration file
└── 📄vite.config.ts // Vite configuration file

```

## :handshake: Contributing

If you want to contribute to this template, follow these steps:

- Fork this repository
- Create a new branch with their feature using `git checkout -b my-feature`.
- Commit their changes using `git commit -m 'Adding new feature'`.
- Push the changes to their branch using `git push origin my-feature`.
- Open a pull request on your repository.
