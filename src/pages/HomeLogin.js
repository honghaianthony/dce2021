import MainLayout from "../layouts/MainLayout";
import Login from "./Login";

function HomeLogin() {

    return (
        <>
        <MainLayout>

            <h1>Home</h1>
            <Login/>
        </MainLayout>
        </>
        // trong pages sẽ chứa layout
    );
}

export default HomeLogin;