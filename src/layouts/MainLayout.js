import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

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