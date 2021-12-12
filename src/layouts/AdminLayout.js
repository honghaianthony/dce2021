import NavigationAdmin from "../components/Navigations/NavigationAdmin";
import Footer from "../components/Footer/index";
import SideBar from "../components/SideBar/index";
import { useStore } from "../store";

function AdminLayout({ children }) {
  const [state, dispatch] = useStore();
  return (
    <>
      {state.isAuthenticated && state.role === 2 && (
        <>
          <NavigationAdmin />
          <SideBar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}

export default AdminLayout;
