var results, pageInfo;

$(function() {
	$(".explore").click(showModal);
});

function showModal() {
	$(".modal-body").empty();
	var categories = ["American", "Asian", "Fusion", "Barbeque", "Buffets", "Burgers", "Cafes", "Chinese", "Creperies", "Fast", "Food", "Food", "Stands", "Greek", "Hawaiian", "Indian", "Italian", "Japanese", "Korean", "Mediterranean", "Mexican", "Pizzar", "Salad", "Sandwiches", "Soup", "Teriyaki", "Thai", "Vietnamese"];
	for (var i = 0; i < categories.length; i++) {
		var temp = $(".template-category").clone().removeClass("template-category");
		temp.find("button").html(categories[i]);
		$(".modal-body").append(temp);
	}
	$('#myModal').modal();
}

function showPage() {
	var name = $(this).attr("href").split("#")[1];
	//$.get("page.php?name=" + name, displayPage);
	$("link[href=\"css/none.css\"]").attr("href", "css/showpage.css");
}

function displayPage(data) {
	//pageInfo = JSON.parse(data);
}
