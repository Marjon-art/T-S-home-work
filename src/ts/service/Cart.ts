import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }
    get items(): Buyable[] {
        return [...this._items]; 
    }

    getSum(items: Buyable[]): number {
        return items.reduce((acc: number, item: Buyable) => acc + item.price, 0)
    }
    
    getSumSale(items: Buyable[], sale: number): number {
        return this.getSum(items) * (100 - sale) * 0.01
    }
    
    deletedId(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    }
}

