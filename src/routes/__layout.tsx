import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

export function Component() {
  return (
    <div className="layout-wrapper">
      <div className="layout-container">
        <Navbar />
        <Sidebar />
        <div className="layout-page">
          <div className="content-wrapper">
            <div className="container-lg">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
