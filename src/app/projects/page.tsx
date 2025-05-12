import { promises as fs } from "fs";

export default async function Projects() {
  const projectsFile = await fs.readFile(
    process.cwd() + "/src/assets/projects.json",
    "utf8",
  );
  const projects = JSON.parse(projectsFile);

  return (
    <div className="flex flex-grow flex-col">
      {projects.map((project: { title: string; description: string }) => {
        return (
          <ProgrammingProject
            key={project.title}
            title={project.title}
            description={project.description}
          />
        );
      })}
    </div>
  );
}

function ProgrammingProject({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="my-4">
      <div className="rounded-lg border bg-(--card-background) px-5 shadow-[7px_-3.5px_6px_1px_var(--color-slate-500),14px_-7px_0px_1px_var(--foreground)] transition-all ease-in-out hover:shadow-[12px_-7px_0px_1px_var(--color-slate-500),24px_-14px_0px_1px_var(--foreground)]">
        <div className="p-2">
          <div className="text-lg">{title}</div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
