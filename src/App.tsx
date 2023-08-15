import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Editor from './components/Editor';
import TodoItem from './components/TodoItem';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Editor /> */}
      <TodoItem />
      {/* <TodoItem /> */}
    </div>
  );
}

export default App;
