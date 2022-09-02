import Banner from './components/AdvertBanner/Banner';
import Navbar from './components/navbar/Navbar';
import RIghtSideBar from './components/RightSide/RIghtSideBar';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <Sidebar />
          <Banner/>
          <RIghtSideBar />
        </div>
      </div>
    </>
  );
}

export default App;
