import Main from './components/main/Main';
import RIghtSideBar from './components/RightSide/RIghtSideBar';
import Sidebar from './components/sidebar/Sidebar';
import Profile from './components/User/Profile';


function App() {
  return (
    <>
      <div className="container">
        <div className="row my-md-5 py-md-3">
          {/* <Sidebar /> */}
          <Profile />
          <Main/>
          <RIghtSideBar />
        </div>
      </div>
    </>
  );
}

export default App;
