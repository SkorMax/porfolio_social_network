import { RiSearchEyeLine } from 'react-icons/ri';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="area header">
        <div>
          <img src="/images/logonav.png" />
        </div>
        <div className="search-container">
          <form>
            <label for="search">
              <RiSearchEyeLine className="searchRi" />
            </label>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Who will we look for?"
              className="inputStyle"
            />
            <button type="submit" className="buttonStyle">
              find
            </button>
          </form>
        </div>
      </header>
      <div className="area family-photo">
        <img src="/images/IMG_6116.jpg" alt="weddingPhoto" />
      </div>
      <nav className="area navbar">Navbar</nav>
      <main className="area main">Content</main>
      <footer className="area footer">Footer</footer>
      <div className="area chat">Chat</div>
    </div>
  );
}

export default App;
