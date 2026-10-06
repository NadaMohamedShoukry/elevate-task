import { Outlet } from "react-router";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex flex-col items-center justify-between gap-6">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
