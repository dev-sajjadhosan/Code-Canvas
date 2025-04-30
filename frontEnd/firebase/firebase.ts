import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyA93fxrO7FPE89BkepQc3KzzpiZFKO06wM',
  authDomain: 'devcodecanvas.firebaseapp.com',
  projectId: 'devcodecanvas',
  storageBucket: 'devcodecanvas.firebasestorage.app',
  messagingSenderId: '636275783160',
  appId: '1:636275783160:web:e0d73d404453d74081120d',
}
const app = initializeApp(firebaseConfig)
export default app
