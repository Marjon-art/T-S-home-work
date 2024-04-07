import Cart from './service/Cart';
import Movie from './domain/Movie';
import Buyable from "./domain/Buyable";
import { Categories } from "./domain/Movie";

const cart = new Cart();
console.log(cart.items);

cart.add(new Movie(123, "Jic", 20, 2023, "США", "ghfj", [Categories.Fantastic], 10))


