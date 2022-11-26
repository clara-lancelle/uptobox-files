import './App.css';
import TreeItem from './components/TreeItem';

function App() {
  return (
    <div className="App">
      <input />
      <ul id="myUL">
        <TreeItem folder={{ fullPath: '//' }} />
      </ul>
    </div>
  );
}

export default App;
