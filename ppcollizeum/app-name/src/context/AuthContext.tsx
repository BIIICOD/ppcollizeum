import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

const AuthContext = React.createContext<any>(null);

export function useAuth() {
    // Создание хука useAuth для доступа к контексту во всем приложении
    return useContext(AuthContext);
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    // Создаем компонент-обертку auth для приложения.
    // Можем опционально определить состояние userData и добавить в контекст.
    const [currentUser, setCurrentUser] = useState<any>(null);

    function signup(email: string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
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

    const value = {
        currentUser,
        signup,
        logout,
        login,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;