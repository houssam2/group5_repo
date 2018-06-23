// Following code is for test purposes only. get_movie_list() should be called from front_end
get_movie_list("14,35", 2018);
console.log(recommended_movies);

filter_movies_by_ratings(recommended_movies);

function filter_movies_by_ratings(movies) {
    for (var m=0; m<movies.length; ++m) {
        console.log(movies[m].title);
    }
}