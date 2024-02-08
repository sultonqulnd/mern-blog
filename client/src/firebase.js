// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mernblog-snd.firebaseapp.com',
  projectId: 'mernblog-snd',
  storageBucket: 'mernblog-snd.appspot.com',
  messagingSenderId: '500890446757',
  appId: '1:500890446757:web:1c63284c0beb48f8a1164c',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
