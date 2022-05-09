import MainLayout from "../layouts/MainLayout";
import HomeDCE from "../components/HomeDCE/index";
import { Helmet } from "react-helmet-async";

function HomeLogin() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Trang chủ</title>
      </Helmet>
      <MainLayout>
        <HomeDCE />
      </MainLayout>
    </>
    // trong pages sẽ chứa layout
  );
}

export default HomeLogin;
