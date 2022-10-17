import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function AddCtg() {
    const navigate = useNavigate();
    const { create } = useFetch();

    const [produit, setproduit] = useState("");
    const [ptt, setptt] = useState("");

  const onproduitChange = (e) => {
    setproduit(e.target.value);
  };
  const onpttChange = (e) => {
    setptt(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    create("Categories", { produit, ptt }).then((data) => {
      navigate("/Categories");
    });
  };
    return ( 
        <div className="nvpr">
        <h1 className="nv">Nouveau Catégorie: </h1>
        <form onSubmit={onFormSubmit}>
          <input value={produit} onChange={onproduitChange} /> <br />
          <input value={ptt} onChange={onpttChange} type="color" /> <br />
          <input type="submit" value="Créer" />
        </form>
      </div>
     );
}

export default AddCtg;