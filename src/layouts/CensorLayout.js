import NavigationCensor from "../components/Navigations/NavigationCensor";
import Footer from "../components/Footer/index";

function CensorLayout ({children}) {
    return (
        <>
        <NavigationCensor/>
        {children}
        <Footer/>
        </>
    )
}

export default CensorLayout;