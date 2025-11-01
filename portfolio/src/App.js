import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import EmployeeHero from "./components/EmployeeHero";
import EmployeeInfo from "./components/EmployeeInfo";
import DepartmentInfo from "./components/DepartmentInfo";
import SkillsCertifications from "./components/SkillsCertifications";
import ProjectsContributions from "./components/ProjectsContributions";
import PerformanceMetrics from "./components/PerformanceMetrics";
import ContactDirectory from "./components/ContactDirectory";
import Footer from "./components/Footer";

function App() {
  const [currentView, setCurrentView] = useState("profile");

  return (
    <div className="App">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <div className="main-content">
        {currentView === "profile" && (
          <>
            <EmployeeHero />
            <EmployeeInfo />
            <DepartmentInfo />
            <SkillsCertifications />
            <ProjectsContributions />
            <PerformanceMetrics />
            <ContactDirectory />
          </>
        )}
        {currentView === "team" && <TeamView />}
        {currentView === "directory" && <DirectoryView />}
      </div>
      <Footer />
    </div>
  );
}

// Placeholder components for other views
const TeamView = () => (
  <div className="team-view section">
    <div className="container">
      <h2>Team Members</h2>
      <p>Team view coming soon...</p>
    </div>
  </div>
);

const DirectoryView = () => (
  <div className="directory-view section">
    <div className="container">
      <h2>Employee Directory</h2>
      <p>Directory view coming soon...</p>
    </div>
  </div>
);

export default App;
