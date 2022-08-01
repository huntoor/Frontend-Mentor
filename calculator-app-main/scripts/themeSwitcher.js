const themeStylesheetLink = document.querySelector('#themeStyleSheet');
const themeSwitch = document.querySelector('#switch');


themeSwitch.value = localStorage.getItem("Theme") || 1;

const activateTheme = (event) => {
  localStorage.setItem("Theme", themeSwitch.value);
  switch (Number(themeSwitch.value)) {
    case 1:
      themeStylesheetLink.href = "./css/themes/default.css";
      break;

    case 2:
      themeStylesheetLink.href = "./css/themes/light.css";
      break
    
    case 3:
      themeStylesheetLink.href = "./css/themes/dark.css";
      break;

    default:
      themeStylesheetLink.href = "./css/themes/default.css";
      break;
  };
}
activateTheme();

themeSwitch.addEventListener('change', activateTheme);
