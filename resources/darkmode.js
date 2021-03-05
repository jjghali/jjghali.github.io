$(document).ready(function () {
    $(".darkmode-toggle").change(function (event) {
        // event.preventDefault();
        if (this.checked) {

            less.modifyVars({
                '@primary-color': '@primary-color-light',
                '@secondary-color': '@secondary-color-light',
                '@background-color': '@background-color-light'
            }).then(() => {
                $(".darkmodeicon > div > i").removeClass("fa-moon")
                $(".darkmodeicon > div > i").addClass("fa-sun")
            })
        }
        else {
            less.modifyVars({
                '@primary-color': '@primary-color-dark',
                '@secondary-color': '@secondary-color-dark',
                '@background-color': '@background-color-dark'
            }).then(() => {
                $(".darkmodeicon > div > i").removeClass("fa-sun")
                $(".darkmodeicon > div > i").addClass("fa-moon")
            })
        }


    })
})