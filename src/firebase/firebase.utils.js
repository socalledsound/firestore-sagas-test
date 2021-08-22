import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import FirebaseConfig from './FirebaseConfig'

const config = FirebaseConfig;

firebase.initializeApp(config);


// token:
// 1//060Q0QyqOBpvDCgYIARAAGAYSNwF-L9IrA8c4ae0hUn2Wc9foJ89nRdMDkNI3w57C5wMMavqCorDH6WO2QoDOU5SmIeMEW1SX-OU