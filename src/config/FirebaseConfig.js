import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = initializeApp(
  JSON.parse(
    Buffer.from(process.env.REACT_APP_FIRE_BASE_CONFIG, "base64").toString(
      "ascii"
    )
  )
);

export const auth = getAuth(firebaseConfig);
export default firebaseConfig;
