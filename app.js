const numberOfFilms = +prompt("Сколько Фильмов вы уже просмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцениет его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцениет его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)