import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./routers/appRouter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer />
    </>
  );
}

export default App;
