import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import {onValue, ref, update} from "firebase/database";
import {log} from "node:util";

const AuthContext = React.createContext<any>(null);

export function useAuth() {
    // Создание хука useAuth для доступа к контексту во всем приложении
    return useContext(AuthContext);
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    // Создаем компонент-обертку auth для приложения.
    // Можем опционально определить состояние userData и добавить в контекст.
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    const [creds, setCreds] = useState('')
    const [places, setPlaces] = useState<any>()

    function signup(email: string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        localStorage.removeItem("email")
        localStorage.removeItem("isAuth")
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // Здесь можно получить общие данные о пользователях из Firebase
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        onValue(ref(db, '/users'), querySnapShot => {
            let data = querySnapShot.val() || [];
            let usersItems = [data];
            Object.values(usersItems).map((el, id, data) => {
                const admin = Object.values(el).find((e: any) =>
                  e.email === currentUser?.email && e.role === 'admin'
                )
                admin ? setIsAdmin(true) : setIsAdmin(false)
                const creds = Object.entries(el).find((e: any) => e[1].email === currentUser?.email)
                if (creds) {
                    setCreds(creds[0])
                }
                const places = Object.entries(el).map((e: any) => {
                    if (e[1].data && e[1].hours && e[1].number && e[1].email && e[1].clubName)
                        return (
                            [e[1].data, e[1].hours, e[1].number, e[1].email, e[1].clubName]
                        )
                    else return [0, 0, 0, 0, 0]
                })
                setPlaces(places)
            })
            });
        }, [currentUser]);

    const value = {
        currentUser,
        signup,
        logout,
        login,
        isAdmin,
        creds,
        places
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;