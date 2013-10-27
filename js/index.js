var results, pageInfo;

$(function() {

    $(".form-control").focus();

    $(".random").tooltip({
        "placement" : "bottom",
        "title" : "Click me for a random restaurant"
    });

    $(".settings").hide();
    $(".advanced").click(advancedSearch);

    $(".list-group-item").click(checkboxHandler);

    $(".list-group-item input[type=checkbox]").click(function(e) {
        e.stopPropagation();
    });

    var restaurants = ["Chipotle Mexican Grill", "Taco Del Mar", "Korean Tofu House", "Green House Korean Restaurant", "UDon Fresh Japanese Noodle Station", "Samurai Noodle", "Teriyaki 1st", "Ichiro Teriyaki", "University Teriyaki", "Yummy Bites", "Orange King", "Hungry Husky", "A Burger Place", "Burger Hut", "Subway", "Jimmy John's", "Hungry Husky", "Pho Than Brothers", "Thanh Vi", "Shawarma King", "Aladdin Falafel Corner", "Thai Tom", "Little Thai Restaurant"];
    var categories = ["Teriyaki", "Mexican", "Korean", "Noodles", "Asian", "Burgers", "Sandwiches", "Vietnamese", "Mediterranean", "Thai"];
    $(".form-control").autocomplete({
        lookup : categories
    });

    $("input").keypress(suppressEnter);
    $("#search").click(search);

    $(".sortby a").click(reformatResults);
});

function suppressEnter(event) {
    if (event.which == 13) {
        event.preventDefault();
        search();
    }
}

function checkboxHandler() {
    var checkbox = $(this).find("input[type='checkbox']");
    checkbox.prop("checked", !checkbox.prop("checked"));
}

function advancedSearch() {
    $(".settings").toggle(200);
}

function search() {
    $(".form-control").blur();
    $(".form-control").focus();
    $.get("search.php?query=" + $(".form-control").val(), displayResults);
    $("link[href=\"css/style.css\"]").attr("href", "css/search.css");
}

function displayResults(data) {
    results = JSON.parse(data);
    if ($.isEmptyObject(results)) {
        $(".empty").html("No results");
    } else {
        $(".empty").html("");
    }

    $(".results .list-group-item:not(.template)").remove();

    $.each(results, formatResult);

    $(".form-control").blur();
    $(".form-control").focus();
}

function reformatResults() {
    var sortType = $(this).attr("href").split("#")[1];
    sortData(sortType);
    $(".results .list-group-item:not(.template)").remove();
    $.each(results, formatResult);
}

function sortData(sortType) {
    if (sortType == "rating") {
        results.sort(function(a, b) {
            return b.rating - a.rating;
        });
    } else if (sortType == "price") {
        results.sort(function(a, b) {
            return a.pricing - b.pricing;
        });
    } else if (sortType == "reviews") {
        results.sort(function(a, b) {
            return b.reviews - a.reviews;
        });
    }
}

function formatResult(i, val) {
    var entry = $(".template").clone().removeClass("template").appendTo(".results-group");
    entry.find(".name").html(i + 1 + ". " + val.name);
    entry.find(".hours").html(val.hours);
    entry.find(".reviews").html(val.reviews + " reviews");

    var stars = "";
    for (var j = 0; j < val.rating; j++) {
        stars += "<i class=\"fa fa-star\"></i>";
    }
    for (var j = val.rating; j < 5; j++) {
        stars += "<i class=\"fa fa-star-o\"></i>";
    }
    entry.find(".rating").html(stars);

    var dollars = "";
    for (var j = 0; j < val.pricing; j++) {
        dollars += "<i class=\"fa fa-usd\"></i>";
    }
    entry.find(".pricing").html(dollars);

    entry.attr("href", "#" + val.name.replace(/\s+/, "-"));
    entry.click(showPage);
}

function showPage() {
    var name = $(this).attr("href").split("#")[1];
    $.get("page.php?name=" + name, displayPage);
}

function displayPage(data) {
    pageInfo = JSON.parse(data);
}
