import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/products/${id}`); 
      setProduct(response.data);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <p>{product.title}</p>
    </div>
  );
};

export default Detail;
