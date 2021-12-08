import Navigation from "../components/Navigations/Navigation";
import Footer from "../components/Footer/index";

function MainLayout ({children}) {
    return (
        <>
        <Navigation/>
        {children}
        <Footer/>
        </>
    )
}

export default MainLayout;