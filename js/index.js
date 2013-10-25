$(function() {
    $(".random").tooltip({
        "placement" : "right",
        "title" : "Click me for a good time"
    });
    
    $(".advanced").click(function() {
        $(".settings").toggle();
    });
});
