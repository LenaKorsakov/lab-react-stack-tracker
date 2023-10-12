import './CompaniesList.css';
import { Link } from 'react-router-dom';

function CompaniesList({ companies }) {
  return (
    <div className="Companies-list">
      {companies.map((company) => {
        return (
          <Link to={`/company/${company.slug}`} key={company.id}>
            <article>
              <h3>{company.name}</h3>
              <img src={company.logo} alt={company.name} />
            </article>
          </Link>
        );
      })}
    </div>
  );
}

export default CompaniesList;
