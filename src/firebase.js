import { initializeApp } from "firebase/app";
import { getDatabase, ref, set,onValue } from "firebase/database";
import { API_KEY,AUTH_DOMAIN,PROJECT_ID,STORAGE_BUCKET,MESSAGING_SENDER_ID,APP_ID } from "./var.js";

const firebaseConfig = {
apiKey: API_KEY,
authDomain: AUTH_DOMAIN,
projectId: PROJECT_ID,
storageBucket: STORAGE_BUCKET,
messagingSenderId: MESSAGING_SENDER_ID,
appId: APP_ID
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase();

