const navBar = document.querySelector("header nav"),
  NavBarToggler = document.getElementById("toggler"),
  navMenu = document.getElementById("nav-menu"),
  ThemeIcon = document.getElementById("themeIcon"),
  themes = document.querySelectorAll('[name="theme"][type="radio"]'),
  html = document.documentElement,
  darkModeQuery = matchMedia("(prefers-color-scheme: dark)");

window.addEventListener("scroll", () => {
  navBar.classList.toggle("navbar-fixed", window.scrollY > 0);
});

themes.forEach((theme) => {
  theme.addEventListener("click", (event) => {
    saveTheme(theme);
  });
});

NavBarToggler.addEventListener("click", () => {
  navMenu.classList.toggle("-left-full");
  navMenu.classList.toggle("left-0");
});

const saveTheme = (theme) => {
  let svg = theme.nextElementSibling.children[0].outerHTML;
  ThemeIcon.innerHTML = svg;
  document.getElementById(theme.id).checked = true;
  switch (theme.id) {
    case "light":
      localStorage.setItem("theme", "light");
      html.className = "light";
      break;
    case "dark":
      localStorage.setItem("theme", "dark");
      html.className = "dark";
      break;
    default:
      localStorage.removeItem("theme");
      html.className = darkModeQuery.matches ? "dark" : "light";
      break;
  }
};

const onWindowLoad = () => {
  if (localStorage.theme === "dark") {
    let theme = document.getElementById("dark");
    saveTheme(theme);
  } else if (localStorage.theme === "light") {
    let theme = document.getElementById("light");
    saveTheme(theme);
  } else {
    let theme = document.getElementById("system");
    saveTheme(theme);
  }
};

//  if clicked on page  check out if any dropdown remains open
// close it dynamically

window.onload = (e) => {
  onWindowLoad();
};
