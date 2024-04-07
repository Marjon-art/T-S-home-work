import Movie from '../domain/Movie';
import { Categories } from "../domain/Movie";
import Cart from '../service/Cart';

test("добавление объектов в карзину", () => {
    const movie = new Movie(123, "Jic", 20, 2023, "США", "ghfj", [Categories.Fantastic], 10);
    const cart = new Cart();
    cart.add(movie);
    expect(cart.items.length).toBe(1);
})