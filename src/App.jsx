// Components
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
import UserProfile from "./components/UserProfile/UserProfile";

// Redux
import { useSelector } from "react-redux";

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
};

export default App;
