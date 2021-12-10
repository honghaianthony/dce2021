import Navigation from "../components/Navigations/Navigation";
import NavigationUser from "../components/Navigations/NavigationUser";
import Footer from "../components/Footer/index";
import { useStore, actions } from "../store";
import { useEffect } from "react";

function MainLayout({ children }) {
  const [state, dispatch] = useStore();
  useEffect(() => {
    dispatch(actions.reload());
  }, []);
  return (
    <>
      {state.isAuthenticated ? <NavigationUser /> : <Navigation />}
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
