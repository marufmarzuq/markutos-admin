import React from "react";
import "./AddProduct.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "calc(100vh - 120px)",
        maxWidth: "700px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <button
        className="add-prod-main-screen-btn apmsb-1"
        onClick={() => navigate("general")}
      >
        <div>
          <AiOutlinePlusCircle style={{ fontSize: "35px" }} />
        </div>
        <p>Add General Product</p>
      </button>
      <button
        className="add-prod-main-screen-btn apmsb-2"
        onClick={() => navigate("digital")}
      >
        <div>
          <AiOutlinePlusCircle style={{ fontSize: "35px" }} />
        </div>
        <p>Add Digital Product</p>
      </button>
    </div>
  );
};

export default AddProduct;
