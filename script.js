document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("mobileMenuButton");
    const mobileNavigation = document.getElementById("mobileNavigation");

    if (menuButton && mobileNavigation) {

        menuButton.addEventListener("click", function () {

            mobileNavigation.classList.toggle("open");

        });


        const mobileLinks =
            mobileNavigation.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileNavigation.classList.remove("open");

            });

        });

    }


    const yearElement =
        document.getElementById("currentYear");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});