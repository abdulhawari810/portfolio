import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
