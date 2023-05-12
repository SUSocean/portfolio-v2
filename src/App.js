import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <Header />
      <main className='bg-slate-900'>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
    </>
  );
}

export default App;
