$(document).ready(function () {

    let uv_country = window.universal_variable.user.country;
    let sp_country = "";

    switch (uv_country) {
        case "gb":
            sp_country = "United Kingdom";
            break;
        case "us":
            sp_country = "USA";
            break;
        default:
            sp_country = "Error";
    }

    document.getElementById('control_COLUMN3').value = sp_country;

});