import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineDown } from "react-icons/ai";
import { CiSearch, CiCalendar } from "react-icons/ci";
import ChartRequest from "./ChartRequest";
import logo from '../img/logo.png'
import { MenuModalCoordinator } from './MenuModalCoordinator'
import "../css/coordinator.css"


function HomeCoordinator() {
    const [events, setEvents] = useState();
    const [coordinator,setCoordinator] = useState();
    const [totalPendings,setTotalPendings] = useState();
    const [totalConfirmed,settotalConfirmed] = useState();
    var [search,setSearch] = useState();

    const getEvents = () => {
        fetch(`/get-coordinator-events`)
            .then((res) => res.json(res))
            .then(res => {
                setEvents(res.results);
                setTotalPendings(res.totalPending);
                settotalConfirmed(res.totalAccepted);
                var re = res.results.map(() =>{return true})
                setSearch(re);
            });
    }

    const searchEvents = (e) => {
        if(e.key === 'Enter'){
            var value = document.getElementById("search-input").value.toLowerCase();
            var results = events.map((event,i) =>{
                 var name = event.titulo.toLowerCase(); 
                 if (name.includes(value)){
                     return true
                 }else{
                    return false
                }
            })
            setSearch(results);
        }
    }

    const getCoordinator = () => {
        fetch(`/get-logued-coordinator`)
            .then((res) => res.json(res))
            .then(res => {
                setCoordinator(res);
            });
    }

    useEffect(() => {
        getCoordinator();
        getEvents();
    }, [])

    const formatDate = (d) => {
        var date = d.split("-");
        return `${date[2]}/${date[1]}/${date[0]}`;
    }

    return (
        <div className="page-content-coord">
            <div className='divLoginCar'>
                <img src={logo} className='imgLogin2' alt="Logo Cruz Roja" />
                <div><MenuModalCoordinator pendings={totalPendings}/></div>
            </div>
            {coordinator ? 
                <div>
                    <div className="search-input-container">
                        <CiSearch className="search-icon"/>
                        <input id="search-input" className="seach-input" placeholder="Buscar" onKeyDown={searchEvents}></input>
                    </div>
                    <div className="coordinator-intro">
                        <div className="coordinator-img"><img className="coordinator-image" src={`/users/${coordinator.image}`}></img></div>   
                        <div className="info">
                        <div className="coordinator-name">{coordinator.nombre} {coordinator.apellido_1} {coordinator.apellido_2}</div> 
                        <div className="pending-requests">{totalPendings} solicitudes pendientes</div> 
                        <div className="confirm-requests">{totalConfirmed} confirmadas</div> 
                        </div>
                    </div>
                    <div>
                    <div className="new-event-container">+<a className="new-event" href="">Filtrar por eventos publicados</a><AiOutlineDown color={"#4b4b4b"}/><CiCalendar color={"#4b4b4b"} className="icon-calendar"/></div>
                    <p className='title'>Eventos publicados</p>
                        {events ?
                        events.map((event, i) => {
                            return(
                                search[i] ? 
                                // <Link to={`/solicitudes/evento/${btoa(event.id)}`} className="box-link" key={`link-${i}`}>
                                    <div className="container-event" key={`container-event-${i}`}>
                                        <div className="event-img" key={`event-img-${i}`}><img className="event-image" src={`/${event.image}`}></img></div>
                                        <div className="event-details" key={`event-details-${i}`}>
                                            <div className="event-title" key={`title-${i}`}>{event.titulo}</div>
                                            <div className="event-location" key={`localtion-${i}`}><HiOutlineLocationMarker/> {event.municipio}</div>
                                            <div key={`request-${i}`}>{event.requests.pendings.length} solicitudes| {event.requests.accepted.length} confirmadas</div>
                                            <div key={`chart-request-container${i}`}>
                                                <ChartRequest accepts={event.requests.accepted.length} pending={event.requests.pendings.length} total={event.plazas} key={`chart-request-${i}`}></ChartRequest>
                                            </div>
                                        </div>
                                        <div className="event-datetime" key={`event-datetime-${i}`}>
                                            <div key={`date-${i}`}>{formatDate(event.fecha_ini)}</div>
                                            <div key={`time-${i}`}>{event.hora_empezar}h</div>
                                            <div>
                                             <Link to={`/solicitudes/evento/${btoa(event.id)}`} className="box-link" key={`link-${i}`}>
                                                <div className="requests-pending" key={`requests-pending-${i}`}>{event.requests.pendings.length}</div>
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                                //{/* </Link> */}
                                : ""
                            )})
                        :""}
                    </div>
                </div>
            : ""}
        </div>
    );
}

export default HomeCoordinator;