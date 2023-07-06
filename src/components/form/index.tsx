import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Combobox } from '@headlessui/react';
import { Fruit } from '../../interfaces';

export const Form = () => {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [selectedFruit, setSelectedFruit] = useState<Fruit | null>(null);
  const [filteredFruits, setFilteredFruits] = useState<Fruit[]>([]);
  const inputRef = useRef();

  useEffect(() => {
    fetch('https://fruityvice.com/api/fruit/all')
      .then(response => response.json())
      .then(data => setFruits(data));
  }, []);

  const onChangeQuery = (value: string) => {
    value === ''
      ? setFilteredFruits(fruits)
      : setFilteredFruits(
          fruits.filter(fruit => {
            return fruit.name.toLowerCase().includes(value.toLowerCase());
          })
        );
  };

  return (
    <div className="w-full flex">
      <Combobox value={selectedFruit?.name || ''} onChange={setSelectedFruit}>
        <Combobox.Input
          className="px-2 border border-gray-400 rounded w-full"
          ref={inputRef}
          onChange={event => onChangeQuery(event.target.value)}
          placeholder="e.g. Product ABC"
        />
        <Combobox.Options
          className="mt-10 px-2 bg-white cursor-pointer"
          style={{
            position: 'absolute',
            width: inputRef.current?.clientWidth
          }}>
          {filteredFruits.map(fruit => (
            <Combobox.Option key={fruit.id} value={fruit}>
              {fruit.name}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>

      <button
        disabled={!selectedFruit}
        className={clsx(
          selectedFruit ? 'text-white add-button' : 'text-gray-400 bg-gray-100',
          'py-2 px-3 ml-6 rounded text-sm '
        )}>
        Add
      </button>
    </div>
  );
};
