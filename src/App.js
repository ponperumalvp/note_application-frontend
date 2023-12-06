import { useSelector } from "react-redux";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./pages/Login";

const App = () => {
  const { isLogin } = useSelector((store) => store.users);
  return (
    <div className="App bg-slate-400">
      <div>{isLogin ? <Layout /> : <Login />}</div>
    </div>
  );
};
export default App;
