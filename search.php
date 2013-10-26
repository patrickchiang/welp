<?php
$query = $_GET["query"];

class Restaurant {
    public $name = "";
    public $rating = 0;
    public $pricing = 0;
    public $hours = "";
    public $reviews = 0;

    function __construct($name, $rating, $pricing, $hours, $reviews) {
        $this -> name = $name;
        $this -> rating = $rating;
        $this -> pricing = $pricing;
        $this -> hours = $hours;
        $this -> reviews = $reviews;
    }
}

$ter_uni = new Restaurant("University Teriyaki", 4, 1, "10:00am - 10:00pm", 20);
$ter_nasai = new Restaurant("Nasai Teriyaki", 4, 2, "10:00am - 8:00pm", 10);
$ter_ichiro = new Restaurant("Ichiro Teriyaki", 3, 1, "10:00am - 6:00pm", 5);

$teriyaki = array($ter_uni, $ter_nasai, $ter_ichiro);

if (preg_match("/^.*teriyaki.*$/i", $query)) {
    echo json_encode($teriyaki);
} else {
    echo "[]";
}
?>