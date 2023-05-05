import logo from './logo.svg';
import './App.css';
import Task from './Components/Task.js';
import ListTask from './Components/ListTask';
import AddTask from './Components/AddTask';

function App() {
  return (
    <div className="App-header">
      <ListTask/>
      <AddTask/>
    </div>
  );
}

export default App;
