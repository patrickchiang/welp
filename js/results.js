var results;

$(function() {
    $(".sortby a").click(reformatResults);
    results = JSON.parse(localStorage.getItem("results"));
    displayResults();
});

function displayResults() {
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
    $(this).css("font-weight", "bold");
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
    entry.find(".name").html(val.name);
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
    window.location.href = "restaurants.html";
}
