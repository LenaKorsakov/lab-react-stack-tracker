import './App.css';
import companiesJson from './companies.json';
import technologiesJson from './technologies.json';

import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import TechnologyPage from './pages/TechnologyPage';

function App() {
  const companies = companiesJson;

  const technologies = technologiesJson;

  return (
    <div className="App">
      <header>
        <h3>StackTracker</h3>
      </header>
      <Routes>
        <Route path="/" element={<HomePage companies={companies} />} />
        <Route
          path="/company/:companySlug"
          element={<CompanyPage companies={companies} />}
        />
        <Route
          path="/tech/:slug"
          element={<TechnologyPage technologies={technologies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
