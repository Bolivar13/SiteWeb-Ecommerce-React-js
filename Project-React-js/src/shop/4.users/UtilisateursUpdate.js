function UserUpdate() {
    return ( 
        <div className="d-flex justify-content-center p-5">
            <div className="shadow-lg row col-10 w-50 mt-4">
                <div className="d-flex">
                    <i class="bi bi-pencil-square text-primary p-2 m-2" style={{ fontSize: 20 }}></i>
                    <h1 className="nv">Modifier Utilisateur:</h1>
                </div>
                <div className="col-11 pb-4 pt-3">
                    <div className="pt-2 m-2">
                        <label htmlFor="name">Nom</label>
                        <input type="text" name="" id="" className="form-control" placeholder="Nom..."/>
                    </div>
                    <div className="row pt-2 m-2">
                        <label htmlFor="name">Prenom</label>
                        <input type="text" name="" id="" className="form-control" placeholder="Prenom..."/>
                     </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-outline-primary w-25">Modifier</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default UserUpdate;