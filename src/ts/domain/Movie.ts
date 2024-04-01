enum Categories {
    Fantastic = "Фантастика",
    ActionMovie = "Боевик",
    Fantasy = "Фентези",
    Adventure = "приключение",
};

export default class Movie {
    constructor(
        readonly year: number,
        readonly country: string,
        readonly tagline: string,
        readonly genre: Categories,
        readonly time: number, 
  ){}
};