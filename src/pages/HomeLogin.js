import MainLayout from "../layouts/MainLayout";
import homeLogin from "../components/homeLogin";

function HomeLogin() {

    return (
        <>
        <MainLayout>

            <h1>Home</h1>
            <homeLogin/>
        </MainLayout>
        </>
        // trong pages sẽ chứa layout
    );
}

export default HomeLogin;