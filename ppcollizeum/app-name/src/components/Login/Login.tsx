import React, { useState } from 'react';
import {useAuth} from "../../context/AuthContext";
import {LoginContent, LoginWrapper} from "./style";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import {useNavigate} from 'react-router-dom';

interface UserCreds {
    email: string;
    password: string;
    confirmPassword?: string;
}

const Login = () => {
    const navigate = useNavigate();

    const [createAccount, setCreateAccount] = useState(false);
    const [userCreds, setUserCreds] = useState<UserCreds>({ email: '', password: '' });

    const { signup, login } = useAuth();

    localStorage.getItem('isAuth') === 'true' && navigate('/');

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
                    await login(userCreds.email, userCreds.password);
                    navigate('/')
                } catch (e:any){
                    if(e.code === 'auth/email-already-in-use'){
                        alert('Email already in use. Try again');
                    }
                }
            } else alert('Passwords don\'t match');
        } else {
            try{
                await login(userCreds.email, userCreds.password);
                localStorage.setItem("isAuth", 'true')
                navigate('/');
            } catch (e:any){
                if(e.code === 'auth/invalid-credential'){
                    alert('Invalid credential. Try again');
                }
            }
        }
    }

    return (
        <>
            <LoginWrapper>
                <LoginContent>
                    <p>{createAccount ? 'Register' : 'Log In'}</p>
                    <input
                        placeholder="Email"
                        value={userCreds.email}
                        onChange={(e) => updateEmail(e)}
                    ></input>
                    <input
                        placeholder="Password"
                        type="password"
                        value={userCreds.password}
                        onChange={(e) => updatePassword(e)}
                    ></input>
                    {createAccount &&
                        <input
                            placeholder="Confirm password"
                            type="password"
                            value={userCreds.confirmPassword}
                            onChange={(e) => updateConfirmPassword(e)}
                        ></input>
                    }
                    <ButtonCustom color={'white'} onClick={handleSubmit} text={createAccount ? 'Register' : 'Log In'}/>
                    <ButtonCustom color={'white'} onClick={() => setCreateAccount(!createAccount)} text={createAccount ? 'Go to Log In' : 'Go to Register'} />
                </LoginContent>
            </LoginWrapper>
        </>
    );
}

export default Login;