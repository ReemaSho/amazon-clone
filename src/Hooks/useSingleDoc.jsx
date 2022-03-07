import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { database } from "../Firebase.config";
const useSingleDoc = (collection, docId) => {
  const [document, setDocument] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const docRef = doc(database, collection, docId);
        onSnapshot(docRef, (doc) => {
          setDocument({ ...doc.data(), id: doc.id });
          setLoading(false);
        });
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, [collection, docId]);

  return { document, loading, error };
};

export default useSingleDoc;
