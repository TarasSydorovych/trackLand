import css from "./style.module.css";
export default function Footer() {
  return (
    <footer className={css.footerWrap}>
      <a href="tel:+13293243212" class={css.phone}>
        +1(329) 324-32-12
      </a>
      <a
        href="https://webui-studio.com/en"
        target="_blanck"
        className={css.webUi}
      >
        Development and maintenance of WebUi
      </a>
    </footer>
  );
}
