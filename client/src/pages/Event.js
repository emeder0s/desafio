import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Event() {
    const { id } = useParams();
    const [event,setEvent] = useState();

    // const getEvent = ()=> {
    //     fetch(`/event/${id}`)
    //     .then((res) => res.json(res))
    //     .then(res=>{
    //         setEvent(res);
    //     });
    // }

    // useEffect(()=>{
    //     getSpace();
    // },[])

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
        <button onClick={()=>{enrollTo()}}>Asistir</button>
    </div>   
  );
}

export default Event;