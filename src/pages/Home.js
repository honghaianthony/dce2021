import MainLayout from "../layouts/MainLayout";
import Roadmap from "../components/Roadmap";
import Why from "../components/Why"
import Part1 from "../components/Part1";

function Home() {

    return (
        <>
        <MainLayout>
            <Roadmap/>
            <Why/>
            <h1>Home</h1>
        git push origin --delete
            <Part1/>           
             <h1>Home</h1>
        </MainLayout>
        </>
        // trong pages sẽ chứa layout
    );
}

export default Home;