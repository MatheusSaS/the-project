import { SidebarNav } from "./_components/sidebar";

export default function WorkspaceLayout(props: {
  children: React.ReactNode;
  params: { workspaceId: string };
}) {
  return (
    <>
      <div className="container flex flex-1 gap-12">
        <aside className="hidden w-52 flex-col md:flex">
          <SidebarNav />
        </aside>
        <main className="flex flex-1 flex-col overflow-hidden">
          {props.children}
        </main>
      </div>
    </>
  );
}
