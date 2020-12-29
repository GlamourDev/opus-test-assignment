import { useEffect, useContext } from "react";
import "./styles/styles.scss";
import { getBrowserLang } from "./helpers";
import PageLayout from "./layouts/BaseLayout/Layout";
import { Context } from "./store";

const App = () => {
  // @ts-ignore
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    console.log(state);
    // Get browser locale
    dispatch({ type: "SET_LANG", payload: getBrowserLang() });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <PageLayout collapsed />
    </div>
  );
};
export default App;
