  const toggleBtn = document.getElementById("toggleB");
    const darkMode = () => {
      document.documentElement.classList.add("dark");
      localStorage.setItem("data-theme", "dark");
    };

    const lightMode = () => {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("data-theme", "light");
    };

    toggleBtn.addEventListener("click", () => {
      const theme = localStorage.getItem("data-theme");

      if (theme === "dark") {
        lightMode();
      } else {
        darkMode();
      }
    });
    const theme = localStorage.getItem("data-theme");
    if (theme === "dark") {
      darkMode();
      toggleBtn.setAttribute("checked", "checked");
    } else {
      lightMode();
    }