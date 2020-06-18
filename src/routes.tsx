import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Home from './pages/Home'

const Routes = () => {
    return (
        <BrowserRouter>
            <Sidebar>
                <Route component={Home} path="/" exact />
            </Sidebar>
        </BrowserRouter>
    )
}

export default Routes