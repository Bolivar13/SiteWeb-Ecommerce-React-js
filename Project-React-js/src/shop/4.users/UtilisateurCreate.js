import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function UserAdd() {
    const navigate = useNavigate();
    const { useradd } = useFetch();

    const [Nom, setNom] = useState("");
    const [Premom, setPremom] = useState("");

  const onNomChange = (e) => {
    setNom(e.target.value);
  };
  const onPremomChange = (e) => {
    setPremom(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    useradd("users", { Nom, Premom }).then((data) => {
      navigate("/users");
    });
  };
    return ( 
        <div className="nvpr">
        <h1 className="nv">Nouveau Utilisateur: </h1>
        <form onSubmit={onFormSubmit}>
          <input value={Nom} onChange={onNomChange} /> <br />
          <input value={Premom} onChange={onPremomChange} type="text" /> <br />
          <input type="submit" value="Créer" />
        </form>
      </div>
     );
}

export default UserAdd;