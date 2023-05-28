import React, { useEffect, useState } from "react";
import "./listdocs.css";
import Carddoc from "../../components/Carddoc";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase/firebase"; // Replace with your Firebase configuration import

const ListDocs = () => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    // Fetch data from Firestore when the component mounts
    const fetchData = async () => {
      const q = query(collection(db, "data"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      setFeedData(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div className="Doclist">
      <div className="ourdocs">
        <h1>Our Best Doctors.</h1>
      </div>

      <div className="cards">
        <div className="filler"></div>
        {feedData &&
          feedData.map((data, index) => (
            <Carddoc key={index} name={data.name} />
          ))}
      </div>
    </div>
  );
};

export default ListDocs;
