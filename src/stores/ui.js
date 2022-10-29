import { ref } from 'vue';
import { defineStore } from 'pinia';
import { darkTheme, lightTheme } from 'naive-ui';

const LIGHT = 'light';
const DARK = 'dark';

export const useUiStore = defineStore('ui', () => {
  const theme = ref(DARK);
  const userTheme = ref(lightTheme);

  function switchTheme() {
    if (this.theme === DARK) {
      this.theme = LIGHT;
      this.userTheme = lightTheme;
      this.saveLocalStorageTheme(LIGHT);
    } else {
      this.theme = DARK;
      this.saveLocalStorageTheme(DARK);
      this.userTheme = darkTheme;
    }
  }

  function loadLocalStorageTheme() {
    let _theme = localStorage.getItem('theme');
    if (_theme === LIGHT) {
      this.theme = LIGHT;
      this.userTheme = lightTheme;
    } else {
      this.theme = DARK;
      this.userTheme = darkTheme;
    }
  }

  function saveLocalStorageTheme(theme) {
    localStorage.setItem('theme', theme);
  }

  return {
    theme,
    userTheme,
    switchTheme,
    loadLocalStorageTheme,
    saveLocalStorageTheme,
  };
});
