import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import logo from '../img/logo.png'
import logoComunidad from '../img/logoComunidad.png'
import { Footer } from "../components/layout/Footer";
import { MenuModal } from "../components/MenuModal";
import { ButtonBack } from "../components/ButtonBack"
import { MenuConfirmEvent } from "../components/MenuConfirmEvent";



function Event() {
    const { id } = useParams();
    const [event, setEvent] = useState();
    const [coordinator, setCoordinator] = useState();


    //Traemos los datos del evento en cuestión
    const getEvent = () => {
        fetch(`/get-event/${id}`)
            .then((res) => res.json(res))
            .then(res => {
                console.log(res)
                setEvent(res);
                getCoordinator(res.coordinador);
            });
    }

    useEffect(() => {
        getEvent();

    }, [])

    console.log(event)



    //Traemos los datos del coordinador
    const getCoordinator = (coordinator) => {
        console.log(coordinator)
        fetch(`/get-logued-coordinator/${coordinator}`)
            .then((res) => res.json(res))
            .then(res => {
                console.log(res)
                setCoordinator(res);
            });

    }

    
    return (
        <div className="page-content">

            <div className='divLoginCar'>
                <p className="buttonBack"><ButtonBack /></p>
                <img src={logo} className='imgLogin2' alt="Logo Cruz Roja" />
                <p><MenuModal /></p>
            </div>

            {/* {event ?  */}

            {event &&

                <div className="boxEventDates">
                    <img src={`/${event.image}`} className="imgEventAll2" alt="" />
                    <div className="pfichaDoc">

                        <p className='pCarruselEvent2'>{event.titulo} </p>
                        <p className='pCarruselTime2'>Cruz Roja Española Sierra Norte</p>
                        <p className='pCarruselTime2'>{event.localizacion}</p>
                    </div>
                    <div className="pfichaTiempo">
                        <p className='pCarruselTime3'>{event.fecha_ini}</p>
                        <p className='pCarruselTime3'>|</p>
                        <p className='pCarruselTime3'>{event.hora_empezar}</p>
                        <p className='pCarruselTime3'>{event.hora_terminar}</p>
                        <p className='pCarruselTime3'>h</p>
                    </div>

                    <div className="divContEvent2">

                        <div className="divCom2">
                            <img src={logoComunidad} className='imgLogoCom' alt="Logo Cruz Roja" />
                            {/* <button onClick={() => { enrollTo() }} className="butAsis">   </button> */}
                            <p><MenuConfirmEvent/></p>
                         
                        </div>
                        <hr />

                        <h2 className="pCarruselEvent2">¿Qué vamos a hacer?</h2>

                    </div>
                    <p className='pCarruselLocal'>{event.descripcion}</p>

                    <hr />

                    <h2 className="pCarruselEvent2">¿Quién es nuestro coordinador?</h2>
                    {coordinator &&
                        <div className="boxCoordinatorInfo2">
                    
                            <img className="coordinator-image2" src={`/users/${coordinator.image}`}></img>
                            <p className='pCarruselEvent4'>{coordinator.nombre} {coordinator.apellido_1} {coordinator.apellido_2} </p>
                            <p className='pCarruselEvent5'>250 eventos gestionados</p>
                            <p className='pCarruselEvent5'>Activo desde 22/06/2019</p>

                        </div>}



                </div>
            }


            <Footer className=".footerC2" />
        </div>
    );
}

export default Event;