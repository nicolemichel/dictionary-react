import Search from "./Search";

import "./App.css";

export default function App() {
  return (
    <div className="App container">
      <Search defaultKeyword="wonderful" />

      <p className="text-center pt-3 m-5">
        <a href="https://github.com/nicolemichel/dictionary-react">
          Open-sourced by
        </a>
        <strong> Nicole Michel</strong>
      </p>
    </div>
  );
}
