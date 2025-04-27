export default function Projects() {
  return (
    <>
      <Project />
    </>
  );
}

function Project() {
  return (
    <div>
      <div className="rounded-lg border px-5 shadow-[7px_-3.5px_6px_1px_var(--color-slate-500),15px_-7.5px_0px_1px_var(--foreground)] transition ease-out hover:shadow-[12px_-6px_0px_1px_var(--color-slate-500),20px_-10px_0px_1px_var(--foreground)]">
        <div className="p-2">
          <div className="text-lg">slrpEV Data Dashboard</div>
          <div className="">-----------</div>
        </div>
      </div>
    </div>
  );
}
