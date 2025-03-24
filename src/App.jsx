import SideBar from "./components/Sidebar.jsx";
import MainComponent from "./components/MainComponent.jsx";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <SideBar />
        <MainComponent />
      </div>
    </>
  );
}

export default App;
