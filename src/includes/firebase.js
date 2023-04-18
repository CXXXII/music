import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCXz3Xx20uI7Ji3F9DQMQpj39A7ZmU_ttM',
  authDomain: 'music-cxxxii.firebaseapp.com',
  projectId: 'music-cxxxii',
  storageBucket: 'music-cxxxii.appspot.com',
  messagingSenderId: '388006386845',
  appId: '1:388006386845:web:ffce8e94ccc4bdde434874'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage
}
