import MainLayout from "../layouts/MainLayout";
import Roadmap from "../components/Home/Roadmap/index";
import Why from "../components/Home/Why/index"
import Intro from "../components/Home/Intro/index";
import Talk from "../components/Home/TalkAbout/index";
import Banner from "../components/Home/Banner/index";
import Talkabout from "../components/Home/TalkAbout/index";

function Home() {

    return (
        <>
        <MainLayout>
            <Intro/>  
            <Roadmap/>
            <Why/>      
            <Talk/>             
            <Banner/> 
        </MainLayout>
        </>
        // trong pages sẽ chứa layout
    );
}

export default Home;