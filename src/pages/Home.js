import MainLayout from "../layouts/MainLayout";
import Roadmap from "../components/Home/Roadmap/index";
import Why from "../components/Home/Why/index";
import Intro from "../components/Home/Intro/index";
import Talk from "../components/Home/TalkAbout/index";
import Banner from "../components/Home/Banner/index";
import Talkabout from "../components/Home/TalkAbout/index";
import { useStore } from "../store";
import { Redirect } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Home() {
  const [state, dispatch] = useStore();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Trang chủ</title>
        <meta
          name="description"
          content="Học lập trình trở nên đơn giản hơn bao giờ hết. Bạn sẽ trở thành một lập trình viên tài năng thông qua quá trình nỗ lực học tập và luyện tập mỗi ngày."
        />
      </Helmet>
      {state.isAuthenticated ? (
        <Redirect to="/HomeLogin" />
      ) : (
        <MainLayout>
          <Intro />
          <Roadmap />
          <Why />
          <Talk />
          <Banner />
        </MainLayout>
      )}
    </>
    // trong pages sẽ chứa layout
  );
}

export default Home;
