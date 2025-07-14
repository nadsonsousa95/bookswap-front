
import styles from './PainelHeader.module.css';
import { Link } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useAuth } from "../../contexts/AuthContext.tsx";


export function PainelHeader(){
    const { logout } = useAuth();

    function handleLogout(){
        alert('Tem certeza que deseja sair da conta?');
        logout()
    }

    return (
        <div className={styles.container}>
            <header className={styles.painelHeader}>
                <div className={styles.painelheaderbuttons}>
                    <div className={styles.addBook}>
                        <Link to={'/addBook'}>
                            <IoMdAddCircleOutline 
                                size={35}
                                color={'#94E0B0'}
                            />
                        </Link>
                        <p>Adicionar novo livro</p>
                    </div>
                    <div>
                        <CiLogout 
                            onClick={handleLogout}
                            size={25}
                            color='black'
                        />
                        <p className={styles.logoutText}>Sair</p>
                    </div>
                </div>
                
            </header>
        </div>
    )
}