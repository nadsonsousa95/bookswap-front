import styles from './Footer.module.css'
import logo from './../../assets/img/logo.svg'
import { FaSquareInstagram } from "react-icons/fa6";


export function Footer(){
    return (
        <div className={styles.containerFooter}>
            <footer>
                <div className={styles.textFooter}>
                    <img src={logo} alt='logo'></img>
                    <p><strong>
                    Incentivamos a leitura acessível e sustentável 🤍. 
                    Doe, troque e dê uma nova vida aos seus livros!</strong></p>
                <p>© 2025 BookSwap. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    )
}