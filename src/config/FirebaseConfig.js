import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyCrTSgEVkjVSMkBe4c4rVRJSdC_5qAal2w",
  authDomain: "crypto-listing-ui-76b98.firebaseapp.com",
  projectId: "crypto-listing-ui-76b98",
  storageBucket: "crypto-listing-ui-76b98.appspot.com",
  messagingSenderId: "23232822419",
  appId: "1:23232822419:web:d75782934aa70bf0272166",
});

export const auth = getAuth(firebaseConfig);
export default firebaseConfig;
