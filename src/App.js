import './App.css';
import TreeItem from './components/TreeItem';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section>
        <input className="search" placeholder='Rechercher..' />
        <ul id="myUL">
          <TreeItem folder={{ fullPath: '//' }} />
        </ul>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
