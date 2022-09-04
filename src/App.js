import Main from './components/main/Main';
import RIghtSideBar from './components/RightSide/RIghtSideBar';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  return (
    <>
      <div className="container">
        <div className="row mt-5 pt-4">
          <Sidebar />
          <Main/>
          <RIghtSideBar />
        </div>
      </div>
    </>
  );
}

export default App;
