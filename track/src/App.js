import logo from "./logo.svg";
import "./App.css";
import css from "./components/style.module.css";
import FirstBlock from "./components/firstBlock";

function App() {
  return (
    <div className={css.allWrap}>
      <FirstBlock />
    </div>
  );
}

export default App;
