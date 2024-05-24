import Button from "./Button";
export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-gradient-to-r from-stone-900 to-gray-700 text-gray-50 md:w-45 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-gray-200">
        CollabSphere
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-gray-200 hover:bg-gray-800";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-gray-800 text-gray-200";
          } else {
            cssClasses += " text-gray-400";
          }

          return (
            <li key={project.id}>
              <button className={cssClasses} onClick={() => onSelectProject(project.id)}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
      <div class="rounded-lg bg-gradient-to-tr from-gray-300 to-gray-500 shadow-lg shadow-[#a4a4a4,#ffffff]"></div>
    </aside>
  );
}
