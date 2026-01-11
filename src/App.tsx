import { Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { pages } from '@/pages';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        {pages.map(({ id, path, component: Component }) => (
          <Route key={id} path={path} element={<Component />} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;