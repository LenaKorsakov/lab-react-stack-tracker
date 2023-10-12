import { useNavigate, useParams } from 'react-router-dom';
import './TechnologyPage.css';

function TechnologyPage({ technologies }) {
  const { slug } = useParams();
  const currentTechnology = technologies.find(
    (technology) => technology.slug === slug
  );

  const navigate = useNavigate();

  return (
    <div className="TechnologyPage">
      <h1>Technology detailes</h1>
      <div className="container">
        <div className="img__wrapper">
          <img src={currentTechnology.image} alt={currentTechnology.name} />
        </div>
        <article>
          <h3>{currentTechnology.name}</h3>
          <small>About</small>
          <p>{currentTechnology.description}</p>
        </article>
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default TechnologyPage;
