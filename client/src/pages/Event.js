import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Event() {
    const { id } = useParams();
    const [event,setEvent] = useState();

    const getEvent = ()=> {
        fetch(`/get-event/${id}`)
        .then((res) => res.json(res))
        .then(res=>{
            setEvent(res);
        });
    }

    useEffect(()=>{
        getEvent();
    },[])

    const enrollTo = async () => {
        let data = {
            method: 'POST',
            body: JSON.stringify({fk_id_actividad: id}),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };
        await fetch("/new-request", data)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
        })
    } 

  return (
    <div className="page-content">
        {event ? 
            <div>
                {event.titulo}
                {event.descripcion}
                <button onClick={()=>{enrollTo()}}>Asistir</button>
            </div>
        :""}  
    </div>   
  );
}

export default Event;