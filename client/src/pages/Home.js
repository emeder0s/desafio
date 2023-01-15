import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import {HomeVolunteer} from "../components/HomeVolunteer"
import HomeCoordinator from "../components/HomeCoordinator"
import "../css/coordinator.css"


function Home() {
    const [rol, setRol] = useState();

    const getRol = async () => {
         fetch(`/get-rol`)
            .then((res) => res.json(res))
            .then(res => {
                // setRol(res);
                console.log(res);
            });
    }

    useEffect(() => {
        getRol();
    }, [])

    return (
        <div className="page-content">
            {rol=="coordinador" ? 
            <HomeCoordinator></HomeCoordinator>
            :
            <HomeVolunteer></HomeVolunteer>
            }
            <Footer></Footer>   
        </div>
    );
}

export default Home;