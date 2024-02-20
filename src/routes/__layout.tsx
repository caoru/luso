import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

export function Component() {
  return (
    <div className="layout-wrapper">
      <div className="layout-container">
        <Navbar />

        <div className="layout-page">
          <div className="content-wrapper">
            <div className="container">
              <Sidebar />
              <main>
                <Outlet />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
