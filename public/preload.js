window.addEventListener('DOMContentLoaded', () => {
  // Restrict Node.js API access within the React app (if using nodeIntegration: true)
  const restrictedMethods = ['require', 'eval'];
  for (const method of restrictedMethods) {
    window[method] = undefined;
  }

  // Set up global variables or perform actions before React app loads
  window.myGlobalVariable = 'This is a global variable accessible in the React app';
});
