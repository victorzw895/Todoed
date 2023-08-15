import React, { useState, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const TodoItem = () => {
  const [todoItem, setTodoItem] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  //   const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //     setTodoItem(e.target.value);
  //   };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      console.log('here Hit enter', inputRef?.current?.value);
      //   const text = inputRef?.current?.value;
      const text = 'buy food ingredients @Tuesday @5pm';
    }
  };

  return (
    <div>
      <div
        //    items-center
        className="w-auto box-border my-1 mx-8 h-6 divide-solid divide-white border-b py-9 text-center flex"
      >
        <TextareaAutosize
          className="w-full"
          ref={inputRef}
          //   onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
        {/* <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        ></input>
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {todoItem}
        </label> */}
      </div>

      {/* <div className="flex items-center mr-4">
            <input checked id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            <label htmlFor="red-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Red</label>
        </div>
        <div className="flex items-center mr-4">
            <input checked id="green-checkbox" type="checkbox" value="" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            <label htmlFor="green-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Green</label>
        </div>
        <div className="flex items-center mr-4">
            <input checked id="purple-checkbox" type="checkbox" value="" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            <label htmlFor="purple-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Purple</label>
        </div>
        <div className="flex items-center mr-4">
            <input checked id="teal-checkbox" type="checkbox" value="" className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            <label htmlFor="teal-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teal</label>
        </div>
        <div className="flex items-center mr-4">
            <input checked id="yellow-checkbox" type="checkbox" value="" className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            <label htmlFor="yellow-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yellow</label>
        </div>
        <div className="flex items-center mr-4">
            <input checked id="orange-checkbox" type="checkbox" value="" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            <label htmlFor="orange-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Orange</label>
        </div> */}
    </div>
  );
};

export default TodoItem;
