import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBXe_LVtQJJhD6T6bhR42LjbsIdTb0kR8M',
  appId: '1:99954643495:web:c2278a0d7cd89732caf402',
  authDomain: 'budget-1878d.firebaseapp.com',
  measurementId: 'G-JTJ01FZEFY',
  messagingSenderId: '99954643495',
  projectId: 'budget-1878d',
  storageBucket: 'budget-1878d.appspot.com',
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
