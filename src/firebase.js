import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// As stated by Firebase it is safe to expose your firebase config, secutiry rules
// are what protext your db https://medium.com/@paulbreslin/is-it-safe-to-expose-your-firebase-api-key-to-the-public-7e5bd01e637b 

const prodConfig = {
  apiKey: "AIzaSyDWhS1bktY9GbE2d5Gg1BFPVe0IYF1Dkwo",
  authDomain: "big-sibling-production.firebaseapp.com",
  projectId: "big-sibling-production",
  storageBucket: "big-sibling-production.appspot.com",
  messagingSenderId: "685425871508",
  appId: "1:685425871508:web:d7c2444befeb60bdbf4281",
  measurementId: "G-PFZYGWPW0T",
};

const devConfig = {
  apiKey: "AIzaSyBgsW9fUXT42opku7scbhex-8_HwRNEi0s",
  authDomain: "mentorship-app-b1b29.firebaseapp.com",
  databaseURL: "https://mentorship-app-b1b29.firebaseio.com",
  projectId: "mentorship-app-b1b29",
  storageBucket: "mentorship-app-b1b29.appspot.com",
  messagingSenderId: "860290522386",
  appId: "1:860290522386:web:bb8f28ab251f9e55",
};

export const app = initializeApp( process.env.NODE_ENV === 'production' ? prodConfig: devConfig );

export const db = getFirestore();
