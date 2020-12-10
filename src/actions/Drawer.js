const { default: storeApp } = require('../store');

export default function toggleMenu() {
  storeApp.openDrawer = !storeApp.openDrawer;
}
