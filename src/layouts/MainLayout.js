import Navigation from "../components/Navigations/Navigation";
import NavigationUser from "../components/Navigations/NavigationUser";
import Footer from "../components/Footer/index";
import { useStore } from "../store";

function MainLayout({ children }) {
  const [state, dispatch] = useStore();
  return (
    <>
      {state.isAuthenticated ? <NavigationUser /> : <Navigation />}
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
