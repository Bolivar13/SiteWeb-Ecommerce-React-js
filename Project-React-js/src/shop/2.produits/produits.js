import { Link } from "react-router-dom";

function Products() {
    return ( 
        <div className="m-3 pt-5">
            <div className="d-flex justify-content-between">
                <h1 className="nv">Liste des produits :</h1>
                <button className="btnnvctr" >
                    <Link to="/Addproduit" className="-none text-light">Nouveau Produit</Link>
                </button>
                
            </div>
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th colSpan={3}>Model </th>
                            <th>Couleur</th>
                            <th>Prix</th>
                            <th>Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Itel</td>
                            <td>HDD</td>
                            <td>8th</td>
                            <td>
                                <input type="color" enabled/>
                            </td>
                            <td>342Dh</td>
                            <td>129</td>
                            <td  className="d-flex justify-content-around">
                                <div>
                                    <i class="bi bi-pencil-square text-primary p-2 m-2" style={{ fontSize: 20 }}></i>
                                    <Link to="/editproduit" className="text-decoration-none">Modifier</Link>
                                </div>
                                <button className="btn btn-outline-danger">
                                    <i class="bi bi-trash3 p-1" style={{ fontSize: 20 }}></i>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td >MAC iOS</td>
                            <td>SSD</td>
                            <td>7th </td>
                            <td>
                                <input type="color" enabled/>
                            </td>
                            <td>342Dh</td>
                            <td>12</td>
                            <td  className="d-flex justify-content-around">
                                <div>
                                    <i class="bi bi-pencil-square text-primary p-2 m-2" style={{ fontSize: 20 }}></i>
                                    <Link to="/editproduit" className="text-decoration-none">Modifier</Link>
                                </div>
                                <button className="btn btn-outline-danger">
                                    <i class="bi bi-trash3 p-1" style={{ fontSize: 20 }}></i>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td >Acer</td>
                            <td>SDD+HDD</td>
                            <td>3th</td>
                            <td>
                                <input type="color" enabled/>
                            </td>
                            <td>342Dh</td>
                            <td>13</td>
                            <td  className="d-flex justify-content-around">
                                <div>
                                    <i class="bi bi-pencil-square text-primary p-2 m-2" style={{ fontSize: 20 }}></i>
                                    <Link to="/editproduit" className="text-decoration-none">Modifier</Link>
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

export default Products;