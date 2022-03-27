import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Home } from '../pages/Home'
import { DesignSystem } from '../pages/DesignSystem'

import '../assets/scss/index.scss'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/design-system' element={<DesignSystem />} />
      </Routes>
    </BrowserRouter>
  );
}

