import './CompanyPage.css';
import { Link, useParams } from 'react-router-dom';

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const currentCompany = companies.find(
    (company) => company.slug === companySlug
  );

  const technologies = currentCompany.techStack;

  return (
    <div className="CompanyPage">
      <h1>Company Profile</h1>
      <div className="CompanyPage__container">
        <div className="img__wrapper">
          <img src={currentCompany.logo} alt={currentCompany.name} />
        </div>
        <article>
          <h3>{currentCompany.name}</h3>
          <small>About</small>
          <p>{currentCompany.description}</p>
        </article>
      </div>
      <aside className="technologies__container">
        {technologies.map((technologie) => {
          return (
            <Link key={technologie.id} to={`/tech/${technologie.slug}`}>
              <article key={technologie.slug}>
                <div className="technologie-img__wrapper">
                  <img src={technologie.image} alt={technologie.name} />
                </div>
                <small>{technologie.name}</small>
              </article>
            </Link>
          );
        })}
      </aside>
    </div>
  );
}

export default CompanyPage;
