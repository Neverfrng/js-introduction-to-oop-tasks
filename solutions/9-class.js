import _ from 'lodash';

// BEGIN
export default class Cart {
    constructor() {
      this.items = [];
    }
  
    addItem(item, count) {
      if (!item || typeof item.price !== 'number' || typeof item.name !== 'string') {
        throw new Error('Invalid item');
      }
      if (typeof count !== 'number' || count <= 0) {
        throw new Error('Count must be a positive number');
      }
  
      const existing = this.items.find(({ item: existingItem }) => existingItem.name === item.name);
  
      if (existing) {
        existing.count += count;
      } else {
        this.items.push({ item, count });
      }
    }
  
    getItems() {
      return this.items.map(({ item, count }) => ({ item, count }));
    }
  
    getCost() {
      return this.items.reduce((sum, { item, count }) => sum + item.price * count, 0);
    }
  
    getCount() {
      return this.items.reduce((sum, { count }) => sum + count, 0);
    }
  }
// END
