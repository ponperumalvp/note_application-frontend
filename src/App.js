import "./App.css";
import Layout from "./components/Layout";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="App bg-gradient-to-br from-red-100  to-green-100">
      {/* <div>{isLogin ? <Layout /> : <Login />}</div> */}
      <Layout />
    </div>
  );
};
export default App;
