import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MediaLinks from './components/MediaLinks';
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
      <Footer />
      <MediaLinks />
    </>
  );
}

export default App;
