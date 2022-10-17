import { Link } from "react-router-dom";

function Categories() {
    return ( 
        <div className="m-3 pt-5">
            <div className="d-flex justify-content-between">
                <h1 className="nv">Catégories des produits :</h1> 
                <button className="btnnvctr" >
                    <Link to="/addCategories" className="none text-light">Nouvell Catégorie</Link>
                </button>
                
            </div>
            <div>
                <table class="table table-striped shadow-lg" >
                    <thead>
                        <tr>
                            <th>Nom </th>
                            <th>Couleur</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ordinateurs</td>
                            <td>
                                <input type="color" disabled/>
                            </td>
                            <td  className="d-flex justify-content-around">
                                <div>
                                    <i class="bi bi-pencil-square text-primary p-2 m-2" style={{ fontSize: 20 }}></i>
                                    <Link to="/edit" className="text-decoration-none">Modifier</Link>
                                </div>
                                <button className="btn btn-outline-danger">
                                    <i class="bi bi-trash3 p-1" style={{ fontSize: 20 }}></i>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Smartphones</td>
                            <td>
                                <input type="color" disabled/>
                            </td>
                            <td  className="d-flex justify-content-around">
                                <div>
                                    <i class="bi bi-pencil-square text-primary p-2 m-2" style={{ fontSize: 20 }}></i>
                                    <Link to="/edit" className="text-decoration-none">Modifier</Link>
                                </div>
                                <button className="btn btn-outline-danger">
                                    <i class="bi bi-trash3 p-1" style={{ fontSize: 20 }}></i>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                       
                    </tbody>
                </table>
                <footer className="d-flex justify-content-center p-5"  >Copyright DEV FS 2022/2023</footer>
            </div>
        </div>
     );
}

export default Categories;