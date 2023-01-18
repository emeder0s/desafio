import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export const MenuAllEvents = () => {


    const [allEvents, setAllEvents] = useState()
    const navigate = useNavigate();


    useEffect(() => {

        fetch("/get-events")
            .then(response => response.json(response))
            .then(response => {

                setAllEvents(response)

                // setEvents(response)

            })


    }, [])


    function goToPag(id) {
        // window.location = id
        navigate(id);

    }


    return (
        <div>
            <a href="#openModal2" className='aModal2'>Ver todos</a>

            <div id="openModal2" className="modalDialog">
                <div className='modalEventsTotal'>
                    <a href="#close" title="Close" className="close">X</a>
                    <p className='titEventDispMod'>Eventos disponibles</p>
                    {allEvents ? allEvents.map((everyEvent, i) => (

                        <div key={i} className="boxEventAll2">

                            <button onClick={() => goToPag(`/evento/${everyEvent.id}`)} className="butStartEvent">
                                <p className='pCarruselEvent'>{everyEvent.titulo} </p>
                                <p className='pCarruselLocal'>{everyEvent.localizacion}</p>
                            </button>

                        </div>

                    )) : "no hay"}

                </div>
            </div>
        </div>
    )
}
