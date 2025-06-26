import { Header } from "../../components/Header/Header"
import styles from './Home.module.css';
import { BooksList } from "../../components/BooksList/BookList";
import searchIcon from './../../assets/icons/search-bar.svg'

export default function Home() {
  return (
    <div>
      <Header/>
      <div className={styles.container}>
          <img 
            className={styles.img} 
            src={searchIcon}
            alt="Buscar"
            ></img>

          <input
          className={styles.input} 
          type="text"
          placeholder="Pesquisar por título ou autor"
          ></input>
         <h1>Livros Disponíveis</h1>
          <BooksList></BooksList>
        </div>
    </div>

  )
}
