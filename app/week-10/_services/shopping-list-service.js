import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

const db = getFirestore();

const getItems = async (userId) => {
  try {
    const itemsRef = collection(db, `users/${userId}/items`);
    const snapshot = await getDocs(itemsRef);

    const items = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};

const addItem = async (userId, item) => {
  try {
    const itemsRef = collection(db, `users/${userId}/items`);
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    return null;
  }
};

export { getItems, addItem };