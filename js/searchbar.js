var results;

$(function() {
    $(".form-control").focus();

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
    // $("link[href=\"css/style.css\"]").attr("href", "css/search.css");
    // $("link[href=\"css/showpage.css\"]").attr("href", "css/none.css");
}

function displayResults(data) {
    localStorage.setItem("results", data);
    window.location.href = "results.html";
}