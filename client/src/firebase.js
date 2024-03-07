import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mernblog-snd.firebaseapp.com',
  projectId: 'mernblog-snd',
  storageBucket: 'mernblog-snd.appspot.com',
  messagingSenderId: '500890446757',
  appId: '1:500890446757:web:1c63284c0beb48f8a1164c',
};

export const app = initializeApp(firebaseConfig);
