import Home from './components/Home';
import Footer from './components/layout/Footer';
import PrimaryNav from './components/layout/PrimaryNav';

function App() {

  return (
    <>
      <PrimaryNav />
      <main className="main-container" id='main-content'>
        <Home />
      </main>

      <Footer />
    </>
  )
}

export default App;
