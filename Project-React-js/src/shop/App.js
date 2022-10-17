import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/App.css'


 
import HomePage from '../home/HomePage';
import Aside from './Aside'
import Header from './Header'

import Categories from './1.categories/categories'
import Update from './1.categories/update'
import AddCtg from './1.categories/CatgCreate'

import Products from './2.produits/produits'
import AddProduit from './2.produits/ProduitsCreate';
import UpProduit from './2.produits/update';

import UtilisateurList from './4.users/utilisateurs'
import UserUpdate from './4.users/UtilisateursUpdate'
import UserAdd from './4.users/UtilisateurCreate'

function App() {
  return (
    <BrowserRouter>
      <div className='allItems'>
          <div className='bg-light '>
            <Aside />
          </div>
        <div className='col-9'>
          <Header />
          <main>
            <Routes>
              {/* home */}

              <Route path='/' element={<HomePage />} />
              <Route path='/' element={<Aside/>} />

 

              {/* 1-Categories */}
              <Route path='/categories' element={<Categories />} />
              <Route path='/edit' element={<Update/>}/>
              <Route path='/addCategories' element={<AddCtg/>} />

              {/* 2-Produits */}
              <Route path='/products' element={<Products />} />
              <Route path='/Addproduit' element={<AddProduit/>} />
              <Route path='/editproduit' element={<UpProduit />} />


              {/* 3-Commandes */}

              {/* 4-Users */}
              <Route path='/utilisateurs' element={<UtilisateurList />} />
              <Route path='/useredit' element={<UserUpdate />} />
              <Route path='/useradd' element={<UserAdd/>} />
            </Routes>
          </main>
        </div>
      </div>    
    </BrowserRouter>
   );
}

export default App;