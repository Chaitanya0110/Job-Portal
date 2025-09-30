import './App.css';
import HeroSection from './Components/SearchSection';
import NavigationBar from './Components/NavigationBar';
import JobList from './Components/JobList';
import SideBar from './Components/SideBar';


function App() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <div className="flex bg-[#1a1a2e] p-4 text-white">
        <JobList />
        <SideBar />
      </div>
    </>
  )
}

export default App
