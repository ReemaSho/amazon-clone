import { useState, useEffect } from "react";
import { database } from "../Firebase.config";
import { query, orderBy, onSnapshot, collection } from "firebase/firestore";
const useProductsTimeStamp = (collectionName) => {
  const [collectionDocs, setCollectionDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const ColRef = collection(database, collectionName);
        const q = query(ColRef, orderBy("timestamp", "desc"));
        onSnapshot(q, (snapshot) => {
          let orderedDocs = [];
          snapshot.docs.forEach((doc) => {
            const docData = { ...doc.data(), id: doc.id };
            orderedDocs.push(docData);
          });
          setCollectionDocs(orderedDocs);
          setLoading(false);
        });
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, [collectionName]);
  return { collectionDocs, error, loading };
};

export default useProductsTimeStamp;
