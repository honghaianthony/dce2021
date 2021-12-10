import NavigationCensor from "../components/Navigations/NavigationCensor";
import Footer from "../components/Footer/index";

function HomeDCELayout({ children }) {
    return (
        <>
            <NavigationCensor />
            {children}
            <Footer />
        </>
    )
}

export default HomeDCELayout;