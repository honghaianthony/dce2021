import MainLayout from "../layouts/MainLayout";
import UserInfo from "../components/HomeDCE/UserInfo/index";
import { Helmet } from "react-helmet-async";

function Account() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Thông tin cá nhân</title>
      </Helmet>
      <MainLayout>
        <UserInfo />
      </MainLayout>
    </>
    // trong pages sẽ chứa layout
  );
}

export default Account;
