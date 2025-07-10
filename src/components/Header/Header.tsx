
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo.svg'
import iconNotf from './../../assets/icons/messages.svg'
import profile from './../../assets/img/profile.svg'
import { useAuth } from "../../contexts/AuthContext.tsx";


export function Header(){
    const { user } = useAuth();

    return (
        <div className={styles.container}>
            <header>
                <Link to='/'>
                    <img className={styles.logo} src={logo}/>
                </Link>

                <div className={styles.headerLinks}>
                    {!user && (
                        <Link to={'/login'}>
                            <button className={styles.button}>Entrar</button>
                        </Link>
                    )}

                    {user && (
                        <div className={styles.nav}>
                            <div className={styles.textLinks}>
                                <a href='/'>Buscar Livros</a>
                                <a href='/mybooks'>Minha biblioteca</a>
                                
                            </div>
                            <div className={styles.navLinks}>
                                <Link to={'/'}>
                                    <img style={{ width:35 }} src={iconNotf}/>
                                </Link>
                                <Link to={'/dashboard'}>
                                    <img style={{ width:40}} src={profile}/>
                                </Link>
                           </div>
                        </div>
                    )}
                </div>
                
            </header>
        </div>
    )
}