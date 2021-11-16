import { useState, useEffect } from "react/cjs/react.development";
import PropertyCard from "./PropertyCard";
import axios from "axios";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/PropertyListing")
      .then(({ data }) => setProperties(data))
      .catch((error) =>
        setAlert({ message: "There has been an error, please try again later" })
      );
  });

  return (
    <div>
      Properties Page
      {properties.map((property) => (
        <PropertyCard key={property._id} {...property} />
      ))}
    </div>
  );
};

export default Properties;
