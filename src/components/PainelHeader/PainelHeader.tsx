
import styles from './PainelHeader.module.css';
import { Link } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";

import './../../styles/global.css';


export function PainelHeader(){
    return (
        <div className={styles.container}>
            <header>
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
                        <Link to={'/login'}>
                            <CiLogout 
                                size={25}
                                color='black'
                            />
                        </Link>
                    </div>
                </div>
                
            </header>
        </div>
    )
}