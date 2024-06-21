import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import Layout from '../Layout/Layout';
import styles from './login.module.css';
import { useLoginMutation } from '../../../app/api/userApi';
import { useAppDispatch } from '../../../app/store';
import { setUser } from '../../../app/slices/userSlice';
import { User } from '../../types';

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const result: User = await login({
        username,
        password,
        expiresInMins: 30,
      }).unwrap();

      localStorage.setItem('access', result.token);

      dispatch(setUser(result));
      navigate('/');
    } catch (error) {
      setErrorMessage('Error. Check your credentials and try again.');
    }
  };

  return (
    <Layout variant='secondary' size='small' footer={false}>
      <section className={styles.login} aria-labelledby='login-title'>
        <h3 id='login-title'>Login</h3>
        <article className={styles.article}>
          <form onSubmit={handleLogin} className={styles.form}>
            <Input
              placeholder='Login'
              id='login'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder='Password'
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && <p>{errorMessage}</p>}
            <Button type='submit' disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </article>
      </section>
    </Layout>
  );
}

export default Login;
