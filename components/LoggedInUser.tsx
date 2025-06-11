import { auth } from "../auth";
import ph from "../assets/placeholder.svg";

export default async function LoggedInUser() {
  const session = await auth();

  if (!session?.user) return;

  return (
    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-primary-foreground hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3">
      <img
        className="w-6 rounded-2xl"
        src={session?.user?.image ? session.user.image : "placeholder.svg"}
      />
      <div className="hidden md:block">
        {session?.user?.name === "User" ? "Test User" : session.user.name}
      </div>
    </button>
  );
}
