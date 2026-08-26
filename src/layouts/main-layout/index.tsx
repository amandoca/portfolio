import { AnimatePresence, motion } from "motion/react";
import { Outlet, useLocation } from "react-router";
import { DevelopmentPartnerWidget } from "@/components";
import { Footer, Header } from "./components";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="font-jetbrains min-h-screen flex flex-col">
      <Header />

      <main id="main-content" className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <DevelopmentPartnerWidget />
    </div>
  );
};

export default Layout;
