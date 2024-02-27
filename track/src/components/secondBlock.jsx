import css from "./style.module.css";
import first from "../img/dafasdfa.jpeg";
import second from "../img/dryvan refer - reefer.png";
export default function SecondBlock() {
  return (
    <div id="section2" className={css.wrapSecondBlock}>
      <div className={css.wrapTopBack}>
        <p className={css.pWrFor}>Who can work with us</p>
      </div>
      <div className={css.wrapWhoCan}>
        <p className={css.whoCanDescription}>
          We specialize in matching freight with dry van and reefer trucks,
          offering top-notch expertise and efficient solutions for all logistics
          needs.
        </p>
        <div className={css.wrapListDry}>
          <div className={css.wrapPic}>
            <img src={first} className={css.photoSt} />
            <p className={css.relativP}>Dry Van</p>
          </div>
          <div className={css.wrapPic}>
            <img src={second} className={css.photoSt} />
            <p className={css.relativP}>Reefer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
