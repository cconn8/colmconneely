import Hero from './components/Hero';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <ProjectCard
        title="Build a Desk"
        description="Building a standing desk"
      />
      // <Hero />
    </>
  )
}

export default App;
