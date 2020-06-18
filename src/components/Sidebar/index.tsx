import React from 'react'
import './styles.css'

const Sidebar = () => {
    return (
        <div id="layout">
            <aside>
                <div>
                    <picture>
                        Minha Foto
                    </picture>
                    <h1>Meu Nome</h1>
                    <p>Meu Cargo</p>
                </div>
            </aside>

            <div id="background-content">
                <div id="content">
                    <h1>Content</h1>
                </div>
            </div>
        </div>
    )
}

export default Sidebar