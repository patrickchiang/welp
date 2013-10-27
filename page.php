<?php
$query = $_GET["query"];

class Details {
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


?>