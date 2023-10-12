import CompaniesList from '../components/CompanyList/CompaniesList';

function HomePage({ companies }) {
  return (
    <div>
      <h1>Discover Tech Stacks Used by Top Companies</h1>
      <CompaniesList companies={companies} />
    </div>
  );
}

export default HomePage;
