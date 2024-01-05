import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc, Timestamp } from "firebase/firestore";
import {db} from './Firebase';

export const getAsync = async (collectionName) => {
    try {
        const taskColRef = collection(db, collectionName);
        const querySnapshot = await getDocs(taskColRef);

        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        }));
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
};

export const createAsync = async (collectionName, data) => {
    try {
        await addDoc(collection(db, collectionName), data)
    } catch (error) {
      console.error('Error create data:', error);
      throw error;
    }
};

export const updateAsync = async (collectionName, id, data) => {
    try {
        const docRef = doc(db, collectionName, id)
        await updateDoc(docRef, data)
    } catch (error) {
      console.error('Error update data:', error);
      throw error;
    }
};

export const deleteAsync = async (collectionName, id) => {
    try {
        const docRef = doc(db, collectionName, id)
        await deleteDoc(docRef)
    } catch (error) {
      console.error('Error update data:', error);
      throw error;
    }
};


