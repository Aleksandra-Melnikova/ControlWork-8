
import SideNavigation from '../../components/SideNavigation/SideNavigation.tsx';

const Home = () => {
  return (
    <div className='container row'>
      <div className='col-2'>
        <SideNavigation/>

      </div>
      <div className='col-10'>  Я домашняя страницы</div>

    </div>
  );
};

export default Home;