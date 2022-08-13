import { createContext } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

interface IAuthContext {
  fbAuth: firebase.auth.Auth
  fbDb: firebase.firestore.Firestore
}

firebase.initializeApp({
  apiKey: 'AIzaSyDGnCoFQKEUMVdEOtcAfRY8aNEHNz050ik',
  authDomain: 'react-notions.firebaseapp.com',
  projectId: 'react-notions',
  storageBucket: 'react-notions.appspot.com',
  messagingSenderId: '246907093620',
  appId: '1:246907093620:web:abc8f86673f887a1090721',
  measurementId: 'G-WLJSX28ZNR',
})

export const fbAuth = firebase.auth()
export const fbDb = firebase.firestore()

export const AuthContext = createContext<IAuthContext>({
  fbAuth,
  fbDb,
})
