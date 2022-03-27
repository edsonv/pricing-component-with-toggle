import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom'

import { Home } from '../pages/Home'
import { DesignSystem } from '../pages/DesignSystem'

import '../assets/scss/index.scss'

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/design-system' element={<DesignSystem />} />
      </Routes>
    </HashRouter>
  );
}

