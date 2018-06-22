/*
    The Movie Database (tmdb) module
*/

// Add our api_keys here
var houssam_api_key = "31feed93f2b687e47fba2094f54554be";
// Create an array of our 3 keys. We can cycle through them so we don't quickly run out of requests.
var tmdb_api_keys = [houssam_api_key];
var current_tmdb_api_key = 0;

// Get the list of genre codes into a hash table. 
// Lookup a genre id like: var id = genres["Western"]
// Get all genres like: for (genre in genres) {console.log(genre);}
var genres = get_genre_codes();
console.log(genres);

function get_genre_codes() {
    var genres_local = {};

    // Cycle through api_keys. DOESN'T WORK YET! Currently just uses one key.
    //current_tmdb_api_key = tmdb_api_keys.length % current_tmdb_api_key;

    // Query to get list of genres and their IDs
    var queryURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=" 
                    + tmdb_api_keys[current_tmdb_api_key] 
                    + "&language=en-US";
    console.log(queryURL);

    // Ajax call to get list of genres from tmdb
    $.ajax({
        url: queryURL,
        method: "GET",
        async: false        // Make this call synchronous, since we need the list of genres early
    }).then(function(response) {
        console.log(response);
        for (var i=0; i<response.genres.length; ++i) {
            var name = response.genres[i].name;
            var id = response.genres[i].id;
            genres_local[name] = id;
        }
    });
    return genres_local;
}
