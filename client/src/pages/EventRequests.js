import React, { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useParams } from "react-router-dom";
import logo from '../img/logo.png';
import { MenuModal } from '../components/MenuModal';
import { Footer } from "../components/layout/Footer";
import '../css/coordinator.css'

function EventRequests() {
    var { id } = useParams();
    id = atob(id);
    const [coordinator,setCoordinator] = useState();
    const [requests,setRequests] = useState();
    const [totalPendings,setTotalPendings] = useState(0);
    const [totalConfirmed,settotalConfirmed] = useState(0);
    var [search,setSearch] = useState();

    const getRequests = () => {
        fetch(`/get-requests-by-event/${id}`)
            .then((res) => res.json(res))
            .then(res => {
                setRequests(res.results);
                var re = res.results.map(() =>{return true})
                setSearch(re);
         });
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
        getRequests();
    }, []);

    const updateRegistrations = async ()=> {
        let Metadatos = {
            method: 'POST',
            body: JSON.stringify({id}),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };
        await fetch("/update-registrations", Metadatos)
            .then((res) => res.json())
            .then((res) => {       
        })
    }

    const acceptRequest = async (id_request)=> {
        let Metadatos = {
            method: 'POST',
            body: JSON.stringify({id_request}),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };
        await fetch("/accept-request", Metadatos)
            .then((res) => res.json())
            .then((res) => {
                if(res){
                    updateRegistrations();
                    document.getElementById(`container-${id_request}`).style.display="none";
                }         
        })
    }

    const rejectRequest = async (id_request)=> {
        let Metadatos = {
            method: 'POST',
            body: JSON.stringify({id_request}),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };
        await fetch("/reject-request", Metadatos)
            .then((res) => res.json())
            .then((res) => {
                if(res){
                    document.getElementById(`container-${id_request}`).style.display="none";
                } 
        })
    }

    return (
        <div>
            <div className='divLoginCar'>
                <img src={logo} className='imgLogin2' alt="Logo Cruz Roja" />
                <div><MenuModal /></div>
            </div> 
           <div className="page-content-coord">
            {coordinator ?
                <div className="coordinator-intro">
                    <div className="coordinator-img"><img className="coordinator-image" src={`/users/${coordinator.image}`}></img></div>   
                    <div className="info">
                    <div className="coordinator-name">{coordinator.nombre} {coordinator.apellido_1} {coordinator.apellido_2}</div> 
                    {/* <div className="pending-requests">{totalPendings} solicitudes pendientes</div> 
                    <div className="confirm-requests">{totalConfirmed} confirmadas</div>  */}
                    </div>
                </div>
            :"" }
            {requests ?  
                requests.map((request, i) => {
                    return(
                        search[i] ? 
                        <div id={`container-${request.id}`}className="container-event" key={`container-event-${i}`}>
                            <div className="event-img" key={`event-img-${i}`}><img className="event-image" src={`/users/${request.user.image}`}></img></div>
                            <div className="event-details" key={`event-details-${i}`}>
                                <div className="event-title" key={`title-${i}`}>{request.user.nombre} {request.user.apellido_1} {request.user.apellido_2}</div>
                                <div className="event-location" key={`localtion-${i}`}><HiOutlineLocationMarker/> {request.user.localidad}</div>
                                <div key={`chart-request-container${i}`}>
                                    {/* <ChartRequest accepts={event.requests.accepted.length} pending={event.requests.pendings.length} total={event.plazas} key={`chart-request-${i}`}></ChartRequest> */}
                                </div>
                            </div>
                            <div className="event-datetime" key={`event-datetime-${i}`}>
                                <AiOutlineCheckCircle color="green" className="react-icon" onClick={()=>{acceptRequest(request.id)}}></AiOutlineCheckCircle>
                                <AiOutlineCloseCircle color="red" className="react-icon" onClick={()=>{rejectRequest(request.id)}}></AiOutlineCloseCircle>
                            </div>
                        </div>
                        :""
                    )
                })
            :""}
            </div>  
            <Footer></Footer>   
        </div>
    );
}

export default EventRequests;