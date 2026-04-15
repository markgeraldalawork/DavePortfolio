import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ContentKnowledge from './pages/ContentKnowledge'
import LearningEnvi from './pages/LearningEnvi'
import Diversity from './pages/Diversity'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

export default function App(){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content-knowledge" element={<ContentKnowledge />} />
        <Route path="/learning-environment" element={<LearningEnvi />} />
        <Route path="/diversity" element={<Diversity />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}
