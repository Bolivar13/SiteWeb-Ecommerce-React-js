import { Link } from "react-router-dom";
 
function UtilisateurList() {
    return ( 
        <div className="m-3 pt-5">
            <div className="d-flex justify-content-between">
                <h1 className="nv">List des Utilisateurs :</h1> 
                <button className="btnnvctr" >
                    <Link to="/useradd" className="none text-light">Nouvell Utilisateur</Link>
                </button>
                
            </div>
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Nom </th>
                            <th>Premom</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ali </td>
                            <td>Alami</td>
                            <td  className="d-flex justify-content-around">
                                <div>
                                    <i class="bi bi-pencil-square text-primary p-2 m-2" style={{ fontSize: 20 }}></i>
                                    <Link to="/useredit" className="text-decoration-none">Modifier</Link>
                                </div>
                                <button className="btn btn-outline-danger">
                                    <i class="bi bi-trash3 p-1" style={{ fontSize: 20 }}></i>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Amina</td>
                            <td>Alami</td>
                            <td  className="d-flex justify-content-around">
                                <div>
                                    <i class="bi bi-pencil-square text-primary p-2 m-2" style={{ fontSize: 20 }}></i>
                                    <Link to="/useredit" className="text-decoration-none">Modifier</Link>
                                </div>
                                <button className="btn btn-outline-danger">
                                    <i class="bi bi-trash3 p-1" style={{ fontSize: 20 }}></i>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default UtilisateurList;