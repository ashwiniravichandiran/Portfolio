import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import './App.css';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className='flex-grow'>
      <Hero/>
      <About/>
      <Projects/>
      <Achievements/>
      <Resume/>
      <Contacts/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
