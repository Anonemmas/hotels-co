import { ReactNode } from "react";

import Footer from "components/shared/Footer";
import MainNav from "components/shared/Nav";

export default function AppLayout({
  children,
  variant = "wide",
  navHide = false,
}: {
  children: ReactNode;
  variant?: "wide" | "narrow";
  navHide?: boolean;
}) {
  return (
    <div className="flex h-full min-h-[100vh] flex-col bg-white">
      {!navHide && <MainNav variant={variant} />}
      <div
        className={`mx-auto ${!navHide && "mt-[152px]"} w-full lg:px-4 ${
          variant === "narrow" ? "max-w-[1200px]" : "w-[90%]"
        }`}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
