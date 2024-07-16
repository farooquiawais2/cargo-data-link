# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


# `Electron Setup in Windows`
## System setup
Node.js and npm installed: Make sure you have Node.js and npm installed on your system.

Windows Build Tools: You need some additional build tools for Windows. You can install them using the following command if node -v < 14 then use this command:
```
npm install --global --production windows-build-tools
```

### 1) npm install
### 2) npm run electron:build
Run the Executable:
1) Navigate to the win-unpacked directory (if it exists) and run the .exe file.
2) Alternatively, if you have a standalone .exe installer in the dist directory, run it to install and launch your applicatio

# `Electron Setup in Linux`

## System setup
Node.js and npm installed: Make sure you have Node.js and npm installed on your system.

Linux Build Tools: Install the necessary build tools on Linux. For Debian-based systems (like Ubuntu), you can install the tools using:
```
sudo apt-get install build-essential
```

### 1) npm install
### 2) npm run electron:build
Run the Executable:
1) After running the build command, you should find your packaged Electron application in the `dist` directory. This directory will contain the executable files for Linux (e.g., `.AppImage`).

# `Electron Setup in Mac`

## System setup
Homebrew: Ensure you have Homebrew installed. You can install Homebrew using:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 1) npm install
### 2) npm run electron:build
Run the Executable:
1) After running the packaging command, you should find your packaged Electron application in the `dist` directory. This directory will contain the `.dmg` file for macOS.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
