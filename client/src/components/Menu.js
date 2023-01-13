import React from 'react'

export const Menu = () => {
    return (
        <div>
            <nav>
                <input type="checkbox" id="menu" className='inputMenu'/>
                    <label for="menu" className='labelMenu'> ☰ </label>
                    <ul className='ulMenu'>
                        <li className='liMenu'>Perfil</li>
                        <li className='liMenu'>Fvoritos</li>
                        <li className='liMenu'>Comunidad</li>
                        <li className='liMenu'>Ajustes</li>
                    </ul>
            </nav>
        </div>
    )
}
