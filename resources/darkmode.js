$(document).ready(function () {
    $(".darkmode-toggle").change(function () {
        if (this.checked) {
            less.modifyVars({
                '@primary-color': '@primary-color-light',
                '@secondary-color': '@secondary-color-light',
                '@background-color': '@background-color-light'
            });
        }
        else {
            less.modifyVars({
                '@primary-color': '@primary-color-dark',
                '@secondary-color': '@secondary-color-dark',
                '@background-color': '@background-color-dark'
            });
        }
    })
})