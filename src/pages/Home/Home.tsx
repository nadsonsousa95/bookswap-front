import { Header } from "../../components/Header/Header"
import styles from './Home.module.css';
import { BooksList } from "../../components/BooksList/BookList";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className={styles.container}>
          <input
          className={styles.input} 
          type="text"
          placeholder="Pesquisar"
          ></input>
         <h1>Livros Disponíveis</h1>
          <BooksList></BooksList>
        </div>
    </div>

  )
}
