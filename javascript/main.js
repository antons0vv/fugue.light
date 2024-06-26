document.addEventListener('DOMContentLoaded', function () {

    //Showing films-sets

    function showFilmSet(screenName, filmSet) {
        document.querySelector(screenName).addEventListener('mouseover', () => {
            document.querySelector(filmSet).style.display = "flex";
        })
        document.querySelector(screenName).addEventListener('mouseleave', () => {
            document.querySelector(filmSet).style.display = "none";
        })
    }

    showFilmSet("#nachalo", "#film-nachalo");
    showFilmSet("#human", "#film-human");
    showFilmSet("#nature", "#film-nature");
    showFilmSet("#time", "#film-time");
    showFilmSet("#light", "#film-light");
    showFilmSet("#sound", "#film-sound");
    showFilmSet("#city", "#film-city");

    // Changing logo

    // function changeLogo(screenName) {
    //     document.querySelector(screenName).addEventListener('mouseover', () => {
    //         fLogo1.style.width = "40dvh";
    //         fLogo1.style.height = "40dvh";
    //         fLogo1.style.top = "calc(50dvh - 40dvh)";
    //         fLogo1.style.left = "calc(50vw - 20dvh)";

    //         fLogo2.style.width = "20dvh";
    //         fLogo2.style.height = "20dvh";
    //         fLogo2.style.top = "40dvh";
    //         fLogo2.style.left = "calc(50vw - 10dvh)";

    //         fLogo3.style.width = "45dvh";
    //         fLogo3.style.height = "45dvh";
    //         fLogo3.style.top = "calc(50dvh)";
    //         fLogo3.style.left = "calc(50vw - 25dvh)";

    //         fLogo4.style.width = "30dvh";
    //         fLogo4.style.height = "30dvh";
    //         fLogo4.style.top = "calc(50dvh - 15dvh)";
    //         fLogo4.style.left = "calc(50vw - 30dvh)";
    //     })
    //     document.querySelector(screenName).addEventListener('mouseleave', () => {
    //         fLogo1.style.width = "30dvh";
    //         fLogo1.style.height = "30dvh";
    //         fLogo1.style.top = "calc(50dvh - 30dvh)";
    //         fLogo1.style.left = "calc(50vw - 15dvh)";

    //         fLogo2.style.width = "30dvh";
    //         fLogo2.style.height = "30dvh";
    //         fLogo2.style.top = "50dvh";
    //         fLogo2.style.left = "calc(50vw - 15dvh)";

    //         fLogo3.style.width = "30dvh";
    //         fLogo3.style.height = "30dvh";
    //         fLogo3.style.top = "calc(50dvh - 15dvh)";
    //         fLogo3.style.left = "50vw";

    //         fLogo4.style.width = "30dvh";
    //         fLogo4.style.height = "30dvh";
    //         fLogo4.style.top = "calc(50dvh - 15dvh)";
    //         fLogo4.style.left = "calc(50vw - 30dvh)";
    //     })
    // }

    // const fLogo1 = document.querySelector(".f-logo-p:nth-of-type(1)")
    // const fLogo2 = document.querySelector(".f-logo-p:nth-of-type(2)")
    // const fLogo3 = document.querySelector(".f-logo-p:nth-of-type(3)")
    // const fLogo4 = document.querySelector(".f-logo-p:nth-of-type(4)")

    // changeLogo("#nachalo");
})