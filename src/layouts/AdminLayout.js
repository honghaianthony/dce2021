import NavigationAdmin from "../components/Navigations/NavigationAdmin";
import Footer from "../components/Footer/index";
import SideBar from "../components/SideBar/index"

function AdminLayout({ children }) {
    return (
        <>
            <NavigationAdmin />
            <SideBar />
            {children}
            <Footer />
        </>
    )
}

export default AdminLayout;