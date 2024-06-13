import React, { useState } from 'react';
import {useAuth} from "../../context/AuthContext";
import {LoginContent, LoginWrapper} from "./style";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import {useNavigate} from 'react-router-dom';
import {push, ref, update} from "firebase/database";
import {db} from "../../firebase";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface UserCreds {
    email: string;
    password: string;
    confirmPassword?: string;
}

const Login = () => {
    const navigate = useNavigate();

    const [createAccount, setCreateAccount] = useState(false);
    const [userCreds, setUserCreds] = useState<UserCreds>({ email: '', password: '' });

    const { signup, login, currentUser } = useAuth();

    function updateEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setUserCreds({ ...userCreds, email: e.target.value });
    }

    function updatePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setUserCreds({ ...userCreds, password: e.target.value });
    }

    function updateConfirmPassword(e: React.ChangeEvent<HTMLInputElement>) {
        setUserCreds({ ...userCreds, confirmPassword: e.target.value });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!userCreds.email || !userCreds.password) return;

        if (createAccount) {
            if( userCreds.password === userCreds.confirmPassword ) {
                try {
                    await signup(userCreds.email, userCreds.password);
                    push(ref(db, `/users`), {
                        email: userCreds?.email,
                        role: 'user'
                    });
                    await login(userCreds.email, userCreds.password);
                    navigate('/profile')
                } catch (e:any){
                    if(e.code === 'auth/email-already-in-use'){
                        toast.error('Такой email уже существует. Попробуйте снова')
                    } else if (e.code === 'auth/weak-password'){
                        toast.error('Слабый пароль')
                    }
                }
            } else toast.error('Пароли не совпадают')
        } else {
            try{
                await login(userCreds.email, userCreds.password);
                localStorage.setItem("email", userCreds.email);
                localStorage.setItem("isAuth", 'true')
                toast.success('Авторизация успешна')
                navigate('/profile');
            } catch (e:any){
                if(e.code === 'auth/invalid-credential'){
                    toast.error('Неверный логин или пароль. Попробуйте снова')
                }
            }
        }

    }

    return (
        <>
            <LoginWrapper>
                <ToastContainer></ToastContainer>
                <LoginContent>
                    {currentUser ?
                        <p>Вы уже вошли в аккаунт</p> :
                        <>
                            <p>{createAccount ? 'Регистрация' : 'Вход'}</p>
                            <input
                                placeholder="Введите почту"
                                value={userCreds.email}
                                onChange={(e) => updateEmail(e)}
                            ></input>
                            <input
                                placeholder="Введите пароль"
                                type="password"
                                value={userCreds.password}
                                onChange={(e) => updatePassword(e)}
                            ></input>
                            {createAccount &&
                                <input
                                    placeholder="Введите пароль еще раз"
                                    type="password"
                                    value={userCreds.confirmPassword}
                                    onChange={(e) => updateConfirmPassword(e)}
                                ></input>
                            }
                    <ButtonCustom color={'white'} onClick={handleSubmit} text={createAccount ? 'Зарегистрироваться' : 'Войти'}/>
                    <ButtonCustom color={'white'} onClick={() => setCreateAccount(!createAccount)} text={createAccount ? 'Перейти ко входу' : 'Перейти к регистрации'} />
                        </>
                    }
                </LoginContent>
            </LoginWrapper>
        </>
    );
}

export default Login;