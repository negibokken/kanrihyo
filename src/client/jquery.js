var $ = require('jquery');

$(".react-grid-Grid").hover(function () {
    $(this).append($("<span id='aaa'> + </span>"));
}, function () {
    $(this)
        .find("span:last")
        .remove();
})
