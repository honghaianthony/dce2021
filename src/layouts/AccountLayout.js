import NavigationCensor from "../components/Navigations/NavigationCensor";
import Footer from "../components/Footer/index";

function AccountLayout({ children }) {
    return (
        <>
            <NavigationCensor />
            {children}
            <Footer />
        </>
    )
}

export default AccountLayout;