import { Outlet } from "react-router-dom";

import TopNav from "@/components/common/TopNav";

function Roots() {
  return (
    <>
      <TopNav />
      <Outlet />
    </>
  );
}

export default Roots;
