import Home from './components/Home';
import PrimaryNav from './components/layout/PrimaryNav';

function App() {

  return (
    <>
      <PrimaryNav />
      <main className="main-container">
        <Home />
      </main>
    </>
  )
}

export default App;
