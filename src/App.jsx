import LinkRoute from "./Router/Route";
import { ToastContainer} from 'react-toastify';
import LoginModal from "./Components/Login";
import { useState } from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
   const [loginOpen, setLoginOpen] = useState(false);

  const openLoginModal = () => setLoginOpen(true);
  const closeLoginModal = () => setLoginOpen(false);
  return (
    <>
         <LinkRoute openLoginModal={openLoginModal} />

          <LoginModal isOpen={loginOpen} onClose={closeLoginModal} />
        <ToastContainer />
    </>
  );
}

export default App;
