import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import dotenv from 'dotenv';
import serviceAccount from "../serviceAccountKey.json" with { type: 'json' };

dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();

export { admin, db }
