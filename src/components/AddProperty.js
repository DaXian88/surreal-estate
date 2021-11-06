import "../styles/AddProperty.css";
import { useState } from "react";
import axios from "axios";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const handleAddProperty = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/PropertyListing", {
        ...fields,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddProperty">
      Add Property
      <form onSubmit={handleAddProperty} className="form">
        <label htmlFor="title">
          Description:
          <input
            id="title"
            name="title"
            value={fields.title}
            placeholder="1 bedroom flat"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          City:
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="type">
          Property type:
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          No. of bedrooms:
          <input
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            placeholder="2"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="bathrooms">
          No. of bathrooms:
          <input
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            placeholder="1"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="price">
          Price(£):
          <input
            id="price"
            name="price"
            value={fields.price}
            placeholder="150,000"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            id="email"
            name="email"
            value={fields.email}
            placeholder="123@email.com"
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
