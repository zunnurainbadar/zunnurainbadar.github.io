/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// navbar toggle
$("#nav-toggle").click(function () {
  $(this).toggleClass("is-active");
  $("ul.nav").toggleClass("show");
});

// emailjs init
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "RnKgl-QWNJm7SIicv",
  });
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("service_2uxbbvq", "template_u2we6la", this).then(
        () => {
          console.log("SUCCESS!");
          document.getElementById("contact-form").reset();
          $("#success-alert").addClass("show");
          setTimeout(() => {
            $("#success-alert").removeClass("show");
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    });
};
