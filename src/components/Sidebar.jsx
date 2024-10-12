import { PencilLine } from "@phosphor-icons/react";
import Styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={Styles.sidebar}>
      <img
        className={Styles.cover}
        src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=3450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={Styles.profile}>
        <img
          className={Styles.avatar}
          src="https://avatars.githubusercontent.com/u/43850888?v=4"
          alt=""
        />
        <strong>Tony Matheus</strong>
        <span>Mobile and Web developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
