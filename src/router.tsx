import { HashRouter, Route, Routes } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { Education } from './pages/Education'
import { Home } from './pages/Home'
import { Repos } from './pages/Repos'

export const Router = () => {
  return (
    <HashRouter>
      <Sidebar>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/education' element={<Education />} />
          <Route path='/repos' element={<Repos />} />
        </Routes>
      </Sidebar>
    </HashRouter>
  )
}
