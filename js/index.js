var results, pageInfo;

$(function() {
});

function showPage() {
    var name = $(this).attr("href").split("#")[1];
    //$.get("page.php?name=" + name, displayPage);
    $("link[href=\"css/none.css\"]").attr("href", "css/showpage.css");
}

function displayPage(data) {
    //pageInfo = JSON.parse(data);
}
