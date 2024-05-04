export default function Projects() {
  const projects = [
    {
      project_name: "Expense Tracker",
      project_description:
        "The idea was to create a minimal web app that can be used without any friction so that users are motivated to come and use the app to track their app",
      project_tech: ["React", "Tailwind Css", "Daisy UI", "Supabase"],
      peoject_links: {
        github: "https://github.com/gaurav-vala/expense-tracker-supabse",
        live: "https://expensedaily.netlify.app/",
      },
    },
    {
      project_name: "Graphic Desinger Portfolio",
      project_description:
        "This is a Portfolio that is created to showcase a Desinger's Work",
      project_tech: ["Astro", "Tailwind Css"],
      peoject_links: {
        github: "https://github.com/gaurav-vala/jimit-portfolio",
        live: "https://jimitvala.netlify.app/",
      },
    },
    {
      project_name: "Blog Site Static CMS Integration",
      project_description:
        "This is a Blog Site for an Anime page that shows blogs generated from Github using Static CMS",
      project_tech: ["Astro", "Tailwind Css", "Keystatic CMS"],
      peoject_links: {
        github: "https://github.com/gaurav-vala/sense-list-project",
        live: "https://sense-list.netlify.app/",
      },
    },
  ];
  return (
    <>
      <div className="container mx-auto px-6 mt-6">
        <h2 className="pt-4 pb-3 text-3xl font-semibold capitalize">
          My Projects
        </h2>

        <div className="projects_container">
          {projects.map((single_project, index) => (
            <div
              key={index}
              className="single_project my-4 border-2 border-black p-4 rounded-xl"
            >
              <h3 className="capitalize text-3xl font-bold">
                {single_project.project_name}
              </h3>
              <p className="pt-4">{single_project.project_description}</p>
              <ul className="flex flex-wrap gap-2 pt-4">
                {single_project.project_tech.map((single_tech, index) => (
                  <li
                    className="p-2 border border-black rounded-full lowercase"
                    key={index}
                  >
                    {single_tech}
                  </li>
                ))}
              </ul>
              <div className="links_container flex gap-3 pt-4">
                <a
                  className="underline underline-offset-4"
                  href={single_project.peoject_links.github}
                >
                  Github
                </a>
                {single_project.peoject_links &&
                single_project.peoject_links.live ? (
                  <a
                    className="underline underline-offset-4"
                    href={single_project.peoject_links.live}
                  >
                    Live
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
