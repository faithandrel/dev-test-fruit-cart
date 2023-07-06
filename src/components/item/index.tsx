import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { CartItem, Fruit } from '../../interfaces';

interface ItemProps {
  item: CartItem;
  increment: (fruit: Fruit) => void;
  decrement: (fruit: Fruit) => void;
}

export const Item = ({ item, increment, decrement }) => (
  <div className="w-full px-3 border border-gray-100 border-2 rounded flex items-center justify-between item">
    <p>{item.fruit.name}</p>
    <div className="flex gap-1">
      <button
        className="py-2 px-3 text-lg"
        onClick={() => decrement(item.fruit)}>
        -
      </button>
      <div className="flex items-center">
        <div className="px-2 py-1 rounded bg-gray-100">{item.quantity}</div>
      </div>
      <button
        className="py-2 px-3 text-lg"
        onClick={() => increment(item.fruit)}>
        +
      </button>
    </div>
  </div>
);
