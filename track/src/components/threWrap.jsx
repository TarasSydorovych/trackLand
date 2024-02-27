import css from "./style.module.css";

export default function TheWrap() {
  return (
    <div id="section3" className={css.threWrap}>
      <div className={css.textBigWrap}>
        <p className={css.bigWrapP}>Logistics Capabilities</p>
        <div className={css.line}></div>
        <p className={css.smallP}>Delivering Possibilities, On Time</p>
        <ul className={css.ulLi}>
          <li className={css.liList}>Quick manager response</li>
          <li className={css.liList}>24/7 cargo search</li>
          <li className={css.liList}>Global coverage</li>
        </ul>
      </div>
      <div className={css.textSmallWr}>
        <p className={css.procent}>100%</p>
        <div className={css.lineSmall}></div>
        <p className={css.smDescP}>On-Time Deliveries</p>
        <p className={css.procent}>95%</p>
        <div className={css.lineSmall}></div>
        <p className={css.smDescP}>Global Network Coverage</p>
        <p className={css.procent}>95%</p>
        <div className={css.lineSmall}></div>
        <p className={css.smDescP}>Cross-Border Efficiency</p>
      </div>
    </div>
  );
}
