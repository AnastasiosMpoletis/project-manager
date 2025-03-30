import SideBar from "./components/Sidebar.jsx";
import MainComponent from "./components/Main.jsx";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <SideBar />
        <div id="main" className="flex-auto justify-items-center mt-14">
          <MainComponent />
        </div>
      </div>
    </>
  );
}

export default App;
