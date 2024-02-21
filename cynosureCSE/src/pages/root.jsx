import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
const RootPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default RootPage;
