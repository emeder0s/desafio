import React from "react"
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import { Home } from "../components/Home"
import { FormLogin } from "../components/FormLogin"
import { Loading } from "../components/Loading"
import  Event  from "../pages/Event"


export const Router = () => {

    return (
        <BrowserRouter>
            <div className='routes'>
                <Routes>
                    <Route path="/" element={<FormLogin/>} />
                    <Route path="/loading" element={<Loading/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/evento/:id" element={<Event/>} />           
                </Routes>
            </div>
        </BrowserRouter>
    )
}