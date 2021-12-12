import Navigation from "../components/Navigations/Navigation";
import NavigationUser from "../components/Navigations/NavigationUser";
import NavigationAdmin from "../components/Navigations/NavigationAdmin";
import NavigationCensor from "../components/Navigations/NavigationCensor";
import Footer from "../components/Footer/index";
import { useStore } from "../store";

function MainLayout({ children }) {
  const [state, dispatch] = useStore();
  return (
    <>
      {state.isAuthenticated ? (
        <>
          {state.role === 1 && <NavigationUser />}
          {state.role === 2 && <NavigationAdmin />}
          {state.role === 3 && <NavigationCensor />}
        </>
      ) : (
        <Navigation />
      )}
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
