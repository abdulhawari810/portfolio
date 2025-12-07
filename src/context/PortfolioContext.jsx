import { createContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import db from "../firebase";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "portfolio", "my_profile"), (snapshot) => {
      if (snapshot.exists()) {
        setProfile({ id: snapshot.id, ...snapshot.data() });
      } else {
        console.log("Document my_profile tidak ditemukan");
      }
    });

    return () => unsub();
  }, []);

  return (
    <PortfolioContext.Provider value={{ profile }}>
      {children}
    </PortfolioContext.Provider>
  );
};
