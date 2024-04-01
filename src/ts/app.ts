import Cart from './service/Cart';
import Movie from './domain/Movie';


const cart = new Cart();
console.log(cart.items);

cart.add(new Movie(2012, "США", "Avengers Assemble!", "Фантастика", "Боевик", "Фентези"));

