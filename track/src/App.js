import logo from "./logo.svg";
import "./App.css";
import css from "./components/style.module.css";
import FirstBlock from "./components/firstBlock";
import SecondBlock from "./components/secondBlock";
import TheWrap from "./components/threWrap";
import AboutUs from "./components/aboutUs";
import Footer from "./components/footer";
import Chat from "./components/chat/chat";
function App() {
  return (
    <div className={css.allWrap}>
      <FirstBlock />
      <SecondBlock />
      <TheWrap />
      <AboutUs />
      <Footer />
      <Chat />
    </div>
  );
}

export default App;
