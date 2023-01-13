import React from "react"
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import { Carrusel } from "../components/Carrusel"
import { FormLogin } from "../components/FormLogin"
import { Loading } from "../components/Loading"


export const Router = () => {

    return (
        <BrowserRouter>
            <div className='routes'>
                <Routes>
    
                    <Route path="/login" element={<FormLogin/>} />
                    <Route path="/loading" element={<Loading/>} />
                    <Route path="/carrusel" element={<Carrusel/>} />
            
                </Routes>
            </div>
        </BrowserRouter>
    )
}