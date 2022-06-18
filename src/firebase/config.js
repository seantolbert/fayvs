import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCDWfWUpiBGzUklB0kEmGMDpqAbIVf7pis",
    authDomain: "fayvs-e116b.firebaseapp.com",
    projectId: "fayvs-e116b",
    storageBucket: "fayvs-e116b.appspot.com",
    messagingSenderId: "934987618102",
    appId: "1:934987618102:web:0690d3fd83dd66c1444597",
    measurementId: "G-VMWXV8RPHZ"
  };

initializeApp(firebaseConfig)

const db = getFirestore()
const Auth = getAuth()
const Storage = getStorage()

export {db, Auth, Storage}