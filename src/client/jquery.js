var $ = require('jquery');

$("p").hover(
    function() {
        $(this).append($("<span id='aaa'> + </span>"));
    },
    function() {
        $(this).find("span:last").remove();
    }
)
