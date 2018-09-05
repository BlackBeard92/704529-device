
      var writeToUs = document.querySelector(".contacts .link");
      var writeUs = document.querySelector(".write-us");
      var close = writeUs.querySelector(".modal-close");

      var overlay = document.querySelector(".overlay");

      var form = writeUs.querySelector("form");
      var login = document.querySelector(".write-us .name input");
      var email = writeUs.querySelector(".email input");
      var textarea = writeUs.querySelector(".message textarea");

      var isStorageSupport = true;
      var storage = "";

      try {
        localStorage.getItem("login");
        localStorage.getItem("email");
        localStorage.getItem("textarea");
      } catch (err) {
        isStorageSupport = false;
      }

      writeToUs.addEventListener("click", function (evt){
        evt.preventDefault();
        overlay.classList.add("overlay-show");
        writeUs.classList.add("modal-show");

        if (storage) {
          login.value = storage;
          if (storage) {
            email.value = storage;
            textarea.focus();
          } else {
            email.focus();
          }
        } else {
          login.focus();
        }
      });

      close.addEventListener("click", function (evt){
        evt.preventDefault();
        overlay.classList.remove("overlay-show");
        writeUs.classList.remove("modal-show");
        writeUs.classList.remove("modal-error");
      });

      form.addEventListener("submit", function (evt){
        if (!login.value || !email.value || !textarea.value) {
          evt.preventDefault();
          writeUs.classList.remove("modal-error");
          writeUs.offsetWidth = writeUs.offsetWidth;
          writeUs.classList.add("modal-error");
        } else {
          if (isStorageSupport) {
            localStorage.setItem("login", login.value);
            localStorage.setItem("email", email.value);
            localStorage.setItem("textarea", textarea.value);
          }
        }
      });

      window.addEventListener("keydown", function (evt){
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (writeUs.classList.contains("modal-show")) {
            overlay.classList.remove("overlay-show");
            writeUs.classList.remove("modal-show");
            writeUs.classList.remove("modal-error");
          }
        }
      });

      var map = document.querySelector(".map");
      var mapClose = map.querySelector(".modal-close");
      var img = document.querySelector(".contacts img");

      img.addEventListener("click", function (evt){
        evt.preventDefault();
        overlay.classList.add("overlay-show");
        map.classList.add("modal-show");
      });

      mapClose.addEventListener("click", function (evt){
        evt.preventDefault();
        overlay.classList.remove("overlay-show");
        map.classList.remove("modal-show");
      });

      window.addEventListener("keydown", function (evt){
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (map.classList.contains("modal-show")) {
            overlay.classList.remove("overlay-show");
            map.classList.remove("modal-show");
          }
        }
      });
