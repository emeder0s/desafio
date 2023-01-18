import React from 'react'
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import logMenu from '../img/logMenu.png';
import compartir from '../img/compartir.png';
import bocadillo from '../img/bocadillo.png';
import exportar from '../img/exportar.png';
import alerta from '../img/alerta.png';
import bell from '../img/campana.png';
import bellAlert from '../img/campana.roja.png';
import { AiOutlinePoweroff, AiOutlineLogout } from "react-icons/ai";

export const MenuModal = (props) => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const logout = () =>{
        cookies.remove('session', { path: '/' });
        localStorage.clear();
        navigate("/");
    }

    return (
        <div>
            {props.pendings ? <img src={bellAlert} className='imgMenuModal2' /> : <img src={bell} className='imgMenuModal2' />}
            <a href="#openModal" className='aModal'> <img src={logMenu} className='imgMenuModal2' /></a>

            <AiOutlineLogout className='logout-icon' onClick={logout}/>
            <div id="openModal" class="modalDialog">
                <div className='modalEventsTotal'>
                    <a href="#close" title="Close" class="close">X</a>

                    <h2 className='pModal2'>Selecciona una acción </h2>
                    <hr />
                    <div className='divPmodal'>
                        <p><img src={compartir} className='imgMenuModal' /></p>
                        <h3 className='pModal'> Copiar enlace del evento</h3>
                    </div>
                    <div className='divPmodal'>
                        <p className='pModal'><img src={exportar} className='imgMenuModal' /></p>
                        <h3 className='pModal'>Compartir evento</h3>
                    </div>
                    <div className='divPmodal'>
                        <p><img src={bocadillo} className='imgMenuModal' /></p>
                        <h3 className='pModal'>Contactar con el coordinador</h3>
                    </div>
                    <div className='divPmodal'>
                        <p> <img src={alerta} className='imgMenuModal' /></p>
                        <h3 className='pModal'>Reportar evento</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
