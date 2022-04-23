/* disable ForkTsCheckerWebpackPlugin to enable debugging. 
Bug is tracked here: https://github.com/electron-userland/electron-forge/issues/2681 
https://stackoverflow.com/questions/71673968/white-window-when-debugging-electron-forge-typescript-webpack-app-from-vscod 
*/

//const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = [
  /*new ForkTsCheckerWebpackPlugin()*/
];
