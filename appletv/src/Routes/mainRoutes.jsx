import React from 'react'
import {Routes, Route} from "react-router-dom"
import { HomePage } from '../Pages/HomePage'
import { SignupPage } from '../Pages/Signup'
import {Bannuseraccount} from "../Pages/Bannuseraccount"
import { LoginPage } from '../Pages/Loginpage'
import { Removebannannaccount } from '../Pages/Removebann'
import ManageItems from "../Pages/ManageItemsPage"
// import SinglePage from '../Pages/SP_pages/SinglePage'
import SearchBoxPage from '../Pages/SP_pages/SearchBoxPage'
import { AdminPage } from '../Pages/Adminpage'
import NotFound from '../Componenets/NotFound'
import SinglePage from '../Pages/SinglePage'

function MainRoutes() {
  return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/searchboxpage' element={<SearchBoxPage/>}/>
            <Route path='/singlepage/:id' element={<SinglePage/>}/>
            <Route path="/manageitems" element={<ManageItems/>} />
            <Route path="/adminpage" element={<AdminPage/>} />  
            <Route path='banusers' element={<Bannuseraccount/>}/>
            <Route path='removeban' element={<Removebannannaccount/>}/>
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
  )
}

export default MainRoutes