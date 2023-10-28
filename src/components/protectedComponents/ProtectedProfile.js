import Header from "../Header/Header";
import Profile from "../Profile/Profile";

function ProtectedProfile({ ...props }) {
  return (
    <>
    <Header loggenIn={props.loggenIn}></Header>
    <main>
      <Profile 
        logOut={props.logOut}
        editUserData={props.editUserData}
        setIsError={props.setIsError}
        isSuccess={props.isSuccess}
        setSuccess={props.setSuccess}
        setIsEdit={props.setIsEdit}
        isEdit={props.isEdit}
        isSend={props.isSend}
        />
    </main>
  </>
  )
}

export default ProtectedProfile;