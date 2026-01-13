import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TemplateDetail from './pages/TemplateDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="template/:id" element={<TemplateDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
