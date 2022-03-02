import { collection, onSnapshot } from "firebase/firestore";
import { database } from "../Firebase.config";
import { useState, useEffect } from "react";
const useCollectionData = (collectionName) => {
  const [collectionDocs, setCollectionDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const ColRef = collection(database, collectionName);
        onSnapshot(ColRef, (snapshot) => {
          let collectionData = [];
          snapshot.docs.forEach((doc) => {
            const docData = { ...doc.data(), id: doc.id };
            collectionData.push(docData);
          });
          setCollectionDocs(collectionData);
          setLoading(false);
        });
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, [collectionName]);

  return { collectionDocs, loading, error };
};
export default useCollectionData;
