const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div>
      <div>{title}</div>
      <div>
        {type} - {city}
      </div>
      <div>{bathrooms}</div>
      <div>{bedrooms}</div>
      <div>{price}</div>
      <div>{email}</div>
    </div>
  );
};

export default PropertyCard;
