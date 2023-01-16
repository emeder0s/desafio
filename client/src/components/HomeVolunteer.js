import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import logo from '../img/logo.png'
import MyCalendar from './MyCalendar'
import { Footer } from './layout/Footer'
import { Menu } from './Menu'
import { MenuAllEvents } from './MenuAllEvents'



export const HomeVolunteer = () => {

    const [events, setEvents] = useState()
    const [calendar, setCalendar] = useState(true)
    const [formations, setFormations] = useState(true)



    useEffect(() => {

        fetch("/get-events")
            .then(response => response.json(response))
            .then(response => {
                console.log(response)
                setEvents(response)

                // setEvents(response)

            })


    }, [])



    return (
        <div>

            <div className='divLoginCar'>
                <img src={logo} className='imgLogin2' alt="Logo Cruz Roja" />


                <div><Menu /></div>
            </div>

            <motion.div className='slider-container'>
                <p className='pTitleEvent'>Eventos Recomendados</p>
                <motion.div className='slider' drag='x'
                    dragConstraints={{ right: 0, left: -954 }} >

                    {events ? events.map((everyEvent, i) => (
                        <motion.div className='imageCarrusel'>

                            <div key={i} className="boxEventAll">
                                <img src={`/${everyEvent.image}`} className="imgEventAll" alt="" />
                                <p className='pCarruselEvent'>{everyEvent.titulo} </p>
                                <p className='pCarruselLocal'>{everyEvent.localizacion}</p>
                                <p className='pCarruselTime'>{everyEvent.fecha_ini}</p>
                            </div>

                        </motion.div>

                    )) : "no hay"}


                </motion.div>

            </motion.div>

            {calendar ?
                <div>
                    <p className='pEvent'>Mis eventos</p>
                    <MyCalendar />
                </div>
                : ""}

            <motion.div className='slider-container'>
                <div className='divPesEvent'>
                <p className='pTitleEvent'>Eventos Disponibles</p>
                <p className='pPesEvent'><MenuAllEvents/></p>
                </div>
                
                <motion.div className='slider' drag='x'
                    dragConstraints={{ right: 0, left: -772 }} >


                    {events ? events.map((everyEvent, i) => (
                        <motion.div className='imageCarrusel'>

                            <div key={i} className="boxEventAll">
                                <img src={`/${everyEvent.image}`} className="imgEventAll" alt="" />
                                <p className='pCarruselEvent'>{everyEvent.titulo} </p>
                                <p className='pCarruselLocal'>{everyEvent.localizacion}</p>
                                <p className='pCarruselTime'>{everyEvent.fecha_ini}</p>
                            </div>

                        </motion.div>

                    )) : "no hay"}

                </motion.div>

            </motion.div>

            {/* <div className='divTotalCarrusel'>
                {events ? events.map((everyEvent, i) => (

                    <div key={i} className="boxEventAll">
                        <p className='pCarruselEvent'>{everyEvent.titulo} </p>
                        <p className='pCarruselLocal'>{everyEvent.localizacion}</p>
                        <p className='pCarruselTime'>{everyEvent.fecha_ini}</p>
                    </div>

                )) : "no hay"}
            </div> */}

            <div className='divFormations'>

                <p className='pForm'>Formaciones</p>
                {/* 
                <div>

                    {formations ? formations.map((formation, i) => (

                        <div key={i}>

                            <div>
                                <p>{formation.nombreFormacion}</p>
                            </div>

                        </div>

                    )) : ""}

                </div> */}
            </div>
        </div>
    )


}
