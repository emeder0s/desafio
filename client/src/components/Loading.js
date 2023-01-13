import React from 'react'
import logo from '../img/logo.png'

export const Loading = () => {
    return (
        <div className='divLoading'>

            <div>
                <img src={logo} className='statusBar2' alt="" />
            </div>
            <div className='contenedor'>

                <div className='barra'>
                    <div className='texto'></div>
                </div>
            </div>

        </div>
    )
}
