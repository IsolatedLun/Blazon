import Home from './components/Home';
import Footer from './components/layout/Footer';
import PrimaryNav from './components/layout/PrimaryNav';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Request from './components/Request';

function App() {

  return (
    <Router>
      <PrimaryNav />
      <main aria-label="Main content" className="main-container" id='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/request' element={<Request />} />

          <Route path='*' element={<p className='[ clr-error-400 header-700 ]'>[404] Page not found D:</p>} />
        </Routes>
      </main>

      <Footer />
    </Router>
  )
}

export default App;
