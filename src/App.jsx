import { Header } from "./components/Header";
import { Post } from "./Post";
import "./styles.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Tony Matheus"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda exercitationem magnam quod dolorum necessitatibus eveniet itaque iste nobis blanditiis autem, pariatur porro accusamus perferendis soluta, repellendus ipsum consequatur accusantium deleniti."
          />
          <Post
            author="Tony Chaves"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda exercitationem magnam quod dolorum necessitatibus eveniet itaque iste nobis blanditiis autem, pariatur porro accusamus perferendis soluta, repellendus ipsum consequatur accusantium deleniti."
          />
        </main>
      </div>
    </div>
  );
}
