
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.svg'

export function Header(){
    const loadingAuth: boolean = false;
    const signed: boolean = false;

    return (
        <div className={styles.container}>
            <header>
                <Link to='/'>
                    <img className={styles.logo} src={logo}/>
                </Link>

                <div>
                    {!loadingAuth && !signed && (
                        <Link to={'/login'}>
                            <button className={styles.button}>Entrar</button>
                        </Link>
                    )}

                    {!loadingAuth && signed && (
                        <Link to={'/login'}>
                            <button className={styles.button}>Entrar</button>
                        </Link>
                    )}
                </div>
                
            </header>
        </div>
    )
}