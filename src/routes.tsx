import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Sidebar from './components/Sidebar'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Sidebar} path="/" exact />
        </BrowserRouter>
    )
}

export default Routes