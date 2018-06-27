var rtscore;
var releaseyear;
var genre;
var limit;

// $('input:radio[name="rating"]').change(
//     function(){
//         if ($(this).is(':checked') && $(this).val() == 'Yes') {
//         }
//     });

$( "#submit-button" ).click(function() {
    event.preventDefault();

    if ($("#rt1").is(':checked') == true){
        rtscore = 90;    
    }
    else if ($("#rt2").is(':checked') == true){
        rtscore = 80
    }
    else if ($("#rt3").is(':checked') == true){
        rtscore = 70;
    }
    else if ($("#rt4").is(':checked') == true){
        rtscore = 60;
    }
    else if ($("#rt5").is(':checked') == true){
        rtscore = 50;
    }

    releaseyear = parseInt($("#releaseyear :selected").text());
    genre = "";
    if ($("#action").is(':checked') == true) {
        if (genre == "") {
            genre = genres[$("#action").val()];
        }
        else {
            genre += "," + genres[$("#action").val()];
        }
    }
    if ($("#adventure").is(':checked') == true) {
        if (genre == "") {
            genre = genres[$("#adventure").val()];
        }
        else {
            genre += "," + genres[$("#adventure").val()];
        }
    }
    if ($("#comedy").is(':checked') == true) {
        if (genre == "") {
            genre = genres[$("#comedy").val()];
        }
        else {
            genre += "," + genres[$("#comedy").val()];
        }
    }
    if ($("#horror").is(':checked') == true) {
        if (genre == "") {
            genre = genres[$("#horror").val()];
        }
        else {
            genre += "," + genres[$("#horror").val()];
        }
    }
    if ($("#romance").is(':checked') == true) {
        if (genre == "") {
            genre = genres[$("#romance").val()];
        }
        else {
            genre += "," + genres[$("#romance").val()];
        }
    }
    if ($("#sciencefiction").is(':checked') == true) {
        if (genre == "") {
            genre = genres["science fiction"];
        }
        else {
            genre += "," + genres["science fiction"];
        }
    }
    if ($("#thriller").is(':checked') == true) {
        if (genre == "") {
            genre = genres[$("#thriller").val()];
        }
        else {
            genre += "," + genres[$("#thriller").val()];
        }
    }
    limit = parseInt($("#limitsearch :selected").text());

    console.log(rtscore);
    console.log(releaseyear);
    console.log(genre);
    console.log(limit);
    
    get_rec_movies(rtscore,          // Minimum rotten tomatoes rating
        genre,    // Genre
        releaseyear,        // Year
        limit);         // Limit recommended movies size
console.log(recommended_movies);
  });