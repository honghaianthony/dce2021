import MainLayout from "../layouts/MainLayout";
import UserInfo from "../components/UserInfo/index";

function Account() {
  return (
    <>
      <MainLayout>
        <UserInfo />
      </MainLayout>
    </>
    // trong pages sẽ chứa layout
  );
}

export default Account;
