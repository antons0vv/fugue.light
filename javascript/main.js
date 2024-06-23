document.addEventListener('DOMContentLoaded', function () {
    function showFilmSet(screenName, filmSet) {
        document.querySelector(screenName).addEventListener('mouseover', () => {
            document.querySelector(filmSet).style.display = "flex";
        })
        document.querySelector(screenName).addEventListener('mouseleave', () => {
            document.querySelector(filmSet).style.display = "none";
        })
    }

    showFilmSet("#nachalo", "#film-nachalo")


})