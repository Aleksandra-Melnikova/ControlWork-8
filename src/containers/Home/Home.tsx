
import SideNavigation from '../../components/SideNavigation/SideNavigation.tsx';
import QuotesByCategory from '../../components/ QuotesByCategory/QuotesByCategory.tsx';

const Home = () => {
  return (
    <div className='container row justify-content-between mt-5 px-0'>
      <div className='col-3'>
        <SideNavigation/>

      </div>
      <div className='col-9'>  <QuotesByCategory/></div>

    </div>
  );
};

export default Home;