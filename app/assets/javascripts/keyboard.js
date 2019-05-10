// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
});

var hi = "";
$(document).ready(function(){
    $("div.key").click(function(){
        hi += $(this).text()
        $("#text_space").text(hi);
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("div.key").toggle();
    });
});