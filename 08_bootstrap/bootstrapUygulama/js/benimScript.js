(function () {
    "use strict";

    var $butonuAl = $("#pickButton");

    $("#reasonDropdown li a").on("click", function () {

        var sebep = $(this).text();
        $butonuAl.text(sebep);
    });

})();