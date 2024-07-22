let navbarTogglerTen = document.querySelector(
        ".navbar-ten .navbar-toggler"
      );
      navbarTogglerTen.addEventListener("click", function () {
        navbarTogglerTen.classList.toggle("active");
      });

      // ==== left sidebar toggle
      let sidebarLeft = document.querySelector(".sidebar-left");
      let overlayLeft = document.querySelector(".overlay-left");
      let sidebarClose = document.querySelector(".sidebar-close .close");

      overlayLeft.addEventListener("click", function () {
        sidebarLeft.classList.toggle("open");
        overlayLeft.classList.toggle("open");
      });
      sidebarClose.addEventListener("click", function () {
        sidebarLeft.classList.remove("open");
        overlayLeft.classList.remove("open");
      });

      // ===== navbar ten sideMenu
      let sideMenuLeftTen = document.querySelector(".navbar-ten .menu-bar");

      sideMenuLeftTen.addEventListener("click", function () {
        sidebarLeft.classList.add("open");
        overlayLeft.classList.add("open");
      });
