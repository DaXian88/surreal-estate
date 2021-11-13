import { useState } from "react/cjs/react.development";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    effect;
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
