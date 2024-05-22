import { useState } from 'react';
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
export default function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject(){
    setProjectsState(prevState => {
      return {
        selectedProjectId: null,
        
      }
    })
  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectSidebar />
      <NoProjectSelected/>
    </main>
  );
}
