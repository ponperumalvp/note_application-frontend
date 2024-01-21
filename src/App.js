import "./App.css";
import Layout from "./components/Layout";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className=" container mx-auto App">
      {/* <div>{isLogin ? <Layout /> : <Login />}</div> */}
      <Layout />
    </div>
  );
};
export default App;
