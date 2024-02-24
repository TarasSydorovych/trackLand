import css from "./style.module.css";
import fromLogo from "../img/mt-1330-logo.png";
export default function FirstBlock() {
  return (
    <div className={css.wrapFirstBlock}>
      <header className={css.wrapHeader}>
        <div className={css.wrapLogo}>
          <img src={fromLogo} />
          <p className={css.logoWrap}>BEST Track</p>
        </div>
        <nav className={css.navigation}>
          <ul className={css.navigationUL}>
            <li className={css.liForNav}>Main</li>
            <li className={css.liForNav}>Services</li>
            <li className={css.liForNav}>About</li>
            <li className={css.liForNav}>Contact</li>
          </ul>
        </nav>
        <a href="tel:+1234567890" className={css.nubberWrap}>
          +1(329) 324-32-12
        </a>
      </header>
      <div className={css.wrapformWithT}></div>
    </div>
  );
}
