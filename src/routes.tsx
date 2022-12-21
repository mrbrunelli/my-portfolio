import { HashRouter, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Education from './pages/Education'
import Home from './pages/Home'
import Repos from './pages/Repos'

const Routes = () => {
  return (
    <HashRouter>
      <Sidebar>
        <Route component={Home} path='/' exact />
        <Route component={Education} path='/education' exact />
        <Route component={Repos} path='/repos' />
      </Sidebar>
    </HashRouter>
  )
}

export default Routes
