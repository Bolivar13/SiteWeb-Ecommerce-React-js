import { Link, NavLink } from "react-router-dom";

function Aside() {
    const navlink = ({isActive}) => {
        return isActive ? "active" : "linkto"
    }
   
    return ( 
        <div className="asd">
            <div className="container  ">
               <h1 className="text-center p-5 "style={{ color:'#F5F5F5' , background:'#414084' , backgroundPosition:'absolute' ,right:'33.19%' }}><a></a>LOGO</h1>
               <Link to="home"></Link>

               <div style={{ height: '100vh', overflow: 'scroll initial'  }}>

               <div className="row text-dark " >
                
                <NavLink end className={navlink} style={{ color:'#000000' , front:'inter' , top:'125px' , left:'19px', size:'16px', display:'flex' , lineHeight:'19px',alignItems:'center'}} to="/categories">Catégories</NavLink>
                <NavLink className={navlink}   style={{ color:'#000000' , front:'inter' , top:'125px' , left:'19px', size:'16px', display:'flex' , lineHeight:'19px',alignItems:'center'}} to="/products">Produits</NavLink>
                <NavLink className={navlink} style={{ color:'#000000' , front:'inter' , top:'125px' , left:'19px', size:'16px', display:'flex' , lineHeight:'19px',alignItems:'center'}} to="/commande">Commandes</NavLink>
                <NavLink className={navlink}  style={{ color:'#000000' , front:'inter' , top:'125px' , left:'19px', size:'16px', display:'flex' , lineHeight:'19px',alignItems:'center'}} to="/utilisateurs">Utilisateurs</NavLink>  
    

            </div>
            </div>
        </div>
        </div>
     );
}

export default Aside;