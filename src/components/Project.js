import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <section id="projects">
      <h2 className="text-important">Projects</h2>
      <div class="projects-container">
        {/* <!--Project Card --> */}
        <ProjectCard />
        {/* <!--Project Card --> */}
        <ProjectCard />
        {/* <!--Project Card --> */}
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

export default Project;
