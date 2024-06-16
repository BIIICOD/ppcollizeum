import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getDatabase } from 'firebase/database';

// Конфигурация Firebase вашего веб-приложения
// const firebaseConfig = {
//     apiKey: VITE_APIKEY,
//     authDomain: import.meta.env.VITE_AUTHDOMAIN,
//     projectId: import.meta.env.VITE_PROJECTID,
//     storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//     messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//     appId: import.meta.env.VITE_APPID
// };
const firebaseConfig = {
    apiKey: "AIzaSyDhc-uu6qss0_pklpa8nTGzMkyh-0Vr2Vw",
    authDomain: "gamezone-e06e0.firebaseapp.com",
    databaseURL: 'https://gamezone-e06e0-default-rtdb.firebaseio.com',
    projectId: "gamezone-e06e0",
    storageBucket: "gamezone-e06e0.appspot.com",
    messagingSenderId: "328947294196",
    appId: "1:328947294196:web:e63bc3aca432c3fda8a3a1"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getDatabase(app)