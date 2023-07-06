import './styles.css';

import { useState, useCallback } from 'react';
import { Form } from './components/form';
import { Item } from './components/item';
import { CartItem, Fruit } from './interfaces';

const App = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const onAdd = (fruit: Fruit) =>
    setCartItems(items => {
      const existingItem = items.find(item => item.fruit.id === fruit.id);

      // Add the fruit to cart if not existing
      if (!existingItem) {
        return [...items, { fruit: fruit, quantity: 1 }];
      }

      // Increment quantity if already in cart
      const incrementedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1
      };
      return items.map(item =>
        item.fruit.id === existingItem.fruit.id ? incrementedItem : item
      );
    });

  const decrement = (fruit: Fruit) => {
    setCartItems(items => {
      const existingItem = items.find(item => item.fruit.id === fruit.id);

      // Remove if last item
      if (existingItem.quantity === 1) {
        return items.filter(item => item.fruit.id !== fruit.id);
      }
      
      const decrementedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1
      };
      return items.map(item =>
        item.fruit.id === existingItem.fruit.id ? decrementedItem : item
      );
    });
  };

  return (
    <div className="App">
      <div className="p-4 flex justify-center">
        <div className="w-1/2 min-h-full shadow-sm p-6 bg-white my-8">
          <p className="text-lg">Add Products</p>
          <div className="mt-3">
            <Form onAdd={onAdd} />
          </div>
          <div className="mt-6">
            {cartItems.map(cartItem => (
              <div className="mb-1" key={cartItem.fruit.id}>
                <Item item={cartItem} increment={onAdd} decrement={decrement} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
