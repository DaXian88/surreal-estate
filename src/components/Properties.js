import { useState } from "react/cjs/react.development";
import PropertyCard from "./PropertyCard";
import axios from "axios";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/PropertyListing");
    return () => {
      cleanup;
    };
  }, [input]);

  return (
    <div>
      Properties Page
      <PropertyCard
        title="Beautiful 3 Bed"
        type="Semi-Detached"
        city="Manchester"
        bathrooms="1"
        bedrooms="3"
        price="100,000"
        email="kal@123.com"
      />
    </div>
  );
};

export default Properties;
