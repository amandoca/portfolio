import { Outlet } from "react-router";
import { CoffeeWidget } from "@/components";
import { Footer, Header } from "./components";

const Layout = () => {
  return (
    <div className="font-jetbrains min-h-screen flex flex-col">
      <Header />

      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <CoffeeWidget />
    </div>
  );
};

export default Layout;
