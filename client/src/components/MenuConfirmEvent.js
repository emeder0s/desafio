import React from 'react'
import { useParams} from "react-router-dom";


export const MenuConfirmEvent = () => {
    const { id } = useParams();

    const enrollTo = async () => {
        let data = {
            method: 'POST',
            body: JSON.stringify({ fk_id_actividad: id }),
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
        <div>
            <div>
                <a href="#openModal2" className='aModal3'>Asistir</a>
                
            </div>


            <div id="openModal2" class="modalDialog">
                <div className='modalEventsTotal2'>
                    <a href="#close" title="Close" class="close">X</a>
                    <div className='divModalAsistirEvento'>
                    <p className='pAsistir'>Asistir al evento</p>
                    <p className='pSeguro'>¿Estás seguro de que deseas asistir a este evento recomendado?</p>
                    <button onClick={() => { enrollTo() }} className="butAsis2">Claro, me encantaría</button>
                    {/* <p className='pGracias'>No, gracias</p> */}
                    <a href="#close" title="Close" class="close" className='pGracias'>No gracias</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
