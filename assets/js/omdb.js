/*
    The OMDB Database module
*/

var recommended_movies = [];

// Add our api_keys here
var houssam_omdb_api_key = "e4169616";
var tom_omdb_api_key = "d546d0cf";
var jeff_omdb_api_key = "8b309cfb";

// Create an array of our 3 keys. Cycle through them so we don't run out of requests.
var omdb_api_keys = [houssam_omdb_api_key, tom_omdb_api_key, jeff_omdb_api_key];
var current_omdb_api_key = 0;

// This call for test purposes only. get_movie_list() should be called from front_end
get_rec_movies(90,          // Minimum rotten tomatoes rating
               "Comedy",    // Genre
               2018,        // Year
               10);         // Limit recommended movies size

function get_rec_movies(rotten_tomato_min_value, genre, year, limit) {
    var genre_code = genres[genre];
    var all_movies = get_all_movies_list(genre_code, year);
    console.log(all_movies);

    for (var m=0; m<all_movies.length; ++m) {       
        // Cycle round-robin through api_keys
        current_omdb_api_key = (current_omdb_api_key + 1) % omdb_api_keys.length;

        var queryURL = "http://www.omdbapi.com/"
                        + "?apikey=" + omdb_api_keys[current_omdb_api_key]
                        + "&t=" + all_movies[m].title;
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET",
            async: false
        }).then(function(response) {
            console.log(response);
            if (recommended_movies.length < limit) {
                if (response.hasOwnProperty('Ratings')) {
                    var ratings = response.Ratings;
                    console.log(ratings);
                    var rating_found = false;
                    for (var r=0; r<ratings.length; ++r) {
                        if (ratings[r].Source === "Rotten Tomatoes") {
                            rating_found = true;
                            var rating_val_str = ratings[r].Value;
                            var rating_val = parseInt(rating_val_str.slice(0,-1));
                            console.log("Rotten_Tomatoes = " + rating_val);
                            if (rating_val >= rotten_tomato_min_value) {
                                recommended_movies.push(response);
                                console.log("PUSHED");
                            } else {
                                console.log("Rating " + rating_val_str + " less than " + rotten_tomato_min_value + ": NO PUSH");
                            }
                        }
                    }
                    if (!rating_found) {
                        console.log("Rotten Tomatoes rating not found for this movie");
                    }
                } else {
                    console.log("Movie not found in OMDB");
                }
            } else {
                console.log("*** Reached max limit of recommended movies");
            }
      
    console.log("**** Recommended Movies: ");
    console.log(recommended_movies);


        // Creating a div to hold the movie
        var movieDiv = $("<div class='movie'>");

        // Retreiving thr URL for the image
        var imgURL = response.Poster;

        // Creating an element to hold the image
        var image = $("<img>").attr("src", imgURL);

        // Appending the image
        movieDiv.append(image);

        // Displaying the movie
        $("#movies-view").prepend(movieDiv);

    });
}

}