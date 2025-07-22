import {Link, useNavigate} from 'react-router-dom'
import logo from './../../assets/img/logo.svg'
import styles from './../Login/Login.module.css'
import { useForm } from 'react-hook-form';
import { AuthService } from '../../services/AuthService';

type FormValues = {
  name: string;
  email: string;
  telephone: string;
  password: string;
  confirmPassword: string;
};

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const navigate = useNavigate()


  async function onSubmit(data:FormValues){
    if (data.password !== data.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const user = await AuthService.createUser(data.name, data.email, data.password);
      console.log("Usuário criado com sucesso:", user);
      navigate('/', { replace: true });
    } catch (error: any) {
      alert(error.message || "Erro ao criar usuário.");
    }
  }

  return (
    <div className={styles.container}>
        <Link to={'/'}>
            <img alt='logo' src={logo} />
        </Link>
        <p>Cadastre-se para começar a trocar livros!</p>


        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                type="text" 
                placeholder='Seu nome'
                {...register('name', { required: 'O nome é obrigatório' })}
                />
                {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
            <input 
                type="email" 
                placeholder='Seu email'
                {...register('email', { required: 'O email é obrigatório' })}
                />
                {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
            <input 
                type='password' 
                placeholder='Criar senha'
                {...register('password', { 
                  required: 'A senha é obrigatória',
                  minLength: {value: 6, message: 'A senha deve ter no mínimo 6 caracteres'}
                })}
                />
                {errors.password && <span className={styles.errorMessage}>{errors.password.message}</span>}
            <input 
                type='password' 
                placeholder='Confirmar a senha'
               {...register('confirmPassword', { 
                  required: 'A senha é obrigatória',
                  minLength: {value: 6, message: 'A senha deve ter no mínimo 6 caracteres'}
                })}
                />
                {errors.confirmPassword && <span className={styles.errorMessage}>{errors.confirmPassword.message}</span>}

            <button type='submit'>Cadastre-se</button>
        </form>

        <Link className={styles.linkSemUnderline} to='/login' >
         <p>Já possui conta? <strong>Faça o seu login agora!</strong></p>
        </Link>
    </div>
  )
}

export default Register;