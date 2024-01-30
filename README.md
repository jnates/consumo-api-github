# GitHub API Consumption - Node.js Project

This Node.js project version v14.20.0 consumes the GitHub API to display the top 10 most popular repositories for user "google".

## Setting

1. **Installation of Dependencies:**
   Make sure you have Node version and npm installed. Then, run the following command to install the project dependencies:

   ```bash
   npm install
   ```
    TypeScript Settings:
    Compile the TypeScript code using the following command:

    ```bash
    npm run build
    ```
    
    Execution
    After configuration, you can run the application with the following command:

    ```bash
    npm start
    ```

    This will compile the TypeScript code with npm run build and then run the app with node dist/app.js.

Folder Structure
consumption-api-github/
|-- src/
| |-- constants/
|   |-- apiUrls.ts
|   |-- errorMessages.ts
| |-- utils/
|    |-- apiUtils.ts
| |-- app.ts
|-- node_modules/
|-- package.json
|-- tsconfig.json
|-- README.md