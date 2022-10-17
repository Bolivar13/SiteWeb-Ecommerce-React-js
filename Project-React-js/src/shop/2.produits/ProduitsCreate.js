import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function AddProduit() {
    const navigate = useNavigate();
    const { create } = useFetch();

    const [title, settitle] = useState("");
    const [prix, setprix] = useState("");
    const [stock, setstock] = useState("");


  const ontitleChange = (e) => {
    settitle(e.target.value);
  };
  const onprixChange = (e) => {
    setprix(e.target.value);
  };
  const onstockChange = (e) => {
    setstock(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    create("produits", { title, prix , stock }).then((data) => {
      navigate("/produits");
    });
    console.log("catg");
  };
    return ( 
        <div className="nvpr">
        <h1 className="nv">Nouveau Produit </h1>
        <form onSubmit={onFormSubmit}>
          <input value={title} onChange={ontitleChange} /> <br />
          <input value={prix} onChange={onprixChange} type="number" /> <br />
          <input value={stock} onChange={onstockChange} type="number" /> <br />

          <input type="submit" value="Créer" />
        </form>
      </div>
     );
}

export default AddProduit;