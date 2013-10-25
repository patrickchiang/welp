$(function() {

    $(".form-control").focus();

    $(".random").tooltip({
        "placement" : "left",
        "title" : "Click me for a good time"
    });

    $(".settings").hide();
    $(".advanced").click(function() {
        $(".settings").toggle(200);
    });

    $(".list-group-item").click(function() {
        var checkbox = $(this).find("input[type='checkbox']");
        checkbox.prop("checked", !checkbox.prop("checked"));
    });

    $(".list-group-item input[type=checkbox]").click(function(e) {
        e.stopPropagation();
    });

    var availableTags = ["Chipotle Mexican Grill", "Taco Del Mar", "Korean Tofu House", "Green House Korean Restaurant", "UDon Fresh Japanese Noodle Station", "Samurai Noodle", "Teriyaki 1st", "Ichiro Teriyaki", "University Teriyaki", "Yummy Bites", "Orange King", "Hungry Husky", "A Burger Place", "Burger Hut", "Subway", "Jimmy John's", "Hungry Husky", "Pho Than Brothers", "Thanh Vi", "Shawarma King", "Aladdin Falafel Corner", "Thai Tom", "Little Thai Restaurant"];
    $(".form-control").autocomplete({
        lookup : availableTags
    });
});
