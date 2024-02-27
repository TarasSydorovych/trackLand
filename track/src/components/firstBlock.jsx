import css from "./style.module.css";
import fromLogo from "../img/mt-1330-logo.png";
import { useRef, useState } from "react";
import sendEmail from "./sendMessage";
export default function FirstBlock() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    sendEmail(formRef, e);
    setName("");
    setPhone("");
    setEmail("");
  };
  return (
    <div id="section1" className={css.wrapFirstBlock}>
      <header className={css.wrapHeader}>
        <div className={css.wrapLogo}>
          <img src={fromLogo} />
          <p className={css.logoWrap}>BEST Track</p>
        </div>
        <nav className={css.navigation}>
          <ul className={css.navigationUL}>
            <li className={css.liForNav}>
              <a href="#section1" className={css.liForNav}>
                Main
              </a>
            </li>
            <li className={css.liForNav}>
              <a href="#section2" className={css.liForNav}>
                Services
              </a>
            </li>
            <li className={css.liForNav}>
              <a href="#section3" className={css.liForNav}>
                About
              </a>
            </li>
            <li className={css.liForNav}>
              <a href="#section4" className={css.liForNav}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <a href="tel:+1234567890" className={css.nubberWrap}>
          +1(329) 324-32-12
        </a>
      </header>
      <div className={css.wrapformWithT}>
        <div className={css.smallWrap}>
          <div className={css.wrapF}>
            <form
              className={css.wrapFormSend}
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <p className={css.pForm}>Contact us for free setup</p>
              <div className={css.inpWrapAll}>
                <div className={css.wrapInp}>
                  <label className={css.labelForIn}>Full name</label>
                  <input
                    className={css.inputForm}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    id="text"
                    name="user_name"
                  />
                </div>
                <div className={css.wrapInp}>
                  <label className={css.labelForIn}>Phone number</label>
                  <input
                    className={css.inputForm}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                    id="phone"
                    name="Phone"
                  />
                </div>
                <div className={css.wrapInp}>
                  <label className={css.labelForIn}>Email</label>
                  <input
                    className={css.inputForm}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    name="user_email"
                    id="user_email"
                  />
                </div>
              </div>
              <button type="submit" className={css.buttonRequest}>
                Send request
              </button>
            </form>
          </div>
          <div className={css.wrapMainText}>
            <p className={css.dispServP}>Freight Dispatch Service</p>
            <a href="tel:+1234567890" className={css.nubberWrap}>
              +1(329) 324-32-12
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
