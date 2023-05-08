import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
function App() {
  return (
    <>
      <Header />
      <main className='bg-slate-900'>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
