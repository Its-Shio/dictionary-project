import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="app-footer">
          Coded by Dominica Kelly,{" "}
          <a
            href="https://github.com/Its-Shio/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
