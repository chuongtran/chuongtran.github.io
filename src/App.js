import './App.css';
import Bio from './Components/Bio';
import Education from './Components/Education';
import Section from './Components/Section';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Bio />
        <Section header="OBJECTIVES">
          To work with an organization where I can continuously learn to achieve functional excellence and develop all skills ; therefore getting maximum job satisfaction and optimum career growth.
        </Section>
        <Section header="EDUCATION">
          <Education />
        </Section>
        <Section header="SKILLS">
          <Skills />
        </Section>
        <Section header="EXPERIENCES AND EXTRA ACTIVITIES" />
      </div>
      <div style={{ overflow: 'auto', textAlign: 'center' }}>
        <img src="/images/timeline.png" style={{ width: '100%', minWidth: 1200 }} />
      </div>
    </div>
  );
}

export default App;
