import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Repos from './pages/Repos'

const Routes = () => {
    return (
        <BrowserRouter>
            <Sidebar>
                <Route component={Home} path="/" exact />
                <Route component={Repos} path="/repos" />
            </Sidebar>
        </BrowserRouter>
    )
}

export default Routes