import {Link, useNavigate} from 'react-router-dom'
import logo from './../../assets/img/logo.svg'
import styles from './Login.module.css'
// import { useForm } from 'react-hook-form';


function Login() {
    const navigate = useNavigate()

    function handleSubmit(){
        navigate('/', {replace: true})
    }

    return (
    <div className={styles.container}>
        <Link to={'/'}>
            <img src={logo} />
        </Link>
        <p>Faça o seu login para começar a trocar livros!</p>
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                name="email" 
                placeholder='Seu email'
                required
                />
            <input 
                type='password' 
                name='password' 
                placeholder='Sua senha'
                required
                />
            <button type='submit'>Continue</button>
        </form>

        <Link className={styles.linkSemUnderline} to='/register' >
         <p>Não possui conta? <strong>Cadastre-se agora!</strong></p>
        </Link>
    </div>
  )
}

export default Login