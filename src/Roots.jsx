import { Outlet, useLocation } from "react-router-dom";

import TopNav from "@/components/common/TopNav";

function Roots() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <TopNav />}
      <Outlet />
    </>
  );
}

export default Roots;
