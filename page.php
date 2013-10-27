<?php
$query = $_GET["name"];

class Details {
    public $name = "";
    public $address = "";
    public $phone = "";
    public $website = "";
    public $menu = "";
    
    public $reviews = array();
    public $photos = array();
    
    public $hours = array(
        "sun" => "",
        "mon" => "",
        "tue" => "",
        "wed" => "",
        "thu" => "",
        "fri" => "",
        "sat" => "",
    );
}

class Review {
    public $user = "";
    public $review = "";
    public $rating = 0;
    public $pricing = 0;
}

class Photo {
    public $url = "";
    public $owner = "";
    public $caption = "";
}


?>