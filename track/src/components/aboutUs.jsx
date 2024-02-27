import css from "./style.module.css";
import track from "../img/dsaf.jpeg";
import { useRef, useState } from "react";
import sendEmail from "./sendMessage";
export default function AboutUs() {
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
    <div id="section4" className={css.aboutWrap}>
      <div className={css.firstBlockAbout}>
        <p className={css.ourContact}>Our contacts</p>
        <div className={css.contWr}>
          <a href="tel:+13293243212" class={css.phone}>
            Phone: +1(329) 324-32-12
          </a>
          <a href="mailto:mail@gmail.com" class={css.phone}>
            Email: mail@gmail.com
          </a>
        </div>
      </div>
      <div className={css.formWrap}>
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
                />
              </div>
              <div className={css.wrapInp}>
                <label className={css.labelForIn}>Phone number</label>
                <input
                  className={css.inputForm}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                />
              </div>
              <div className={css.wrapInp}>
                <label className={css.labelForIn}>Email</label>
                <input
                  className={css.inputForm}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>
            <button type="submit" className={css.buttonRequest}>
              Send request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
