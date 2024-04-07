import Buyable from './Buyable';

export enum Categories {
    Fantastic = "Фантастика",
    ActionMovie = "Боевик",
    Fantasy = "Фентези",
    Adventure = "приключение",
};

export default  class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly year: number,
        readonly country: string,
        readonly tagline: string,
        readonly genre: Categories[],
        readonly time: number,
  ){}
};