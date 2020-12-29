import React, { useEffect, useContext } from "react";
import "./App.css";
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
    //setCount(getBrowserLang())
    console.log(getBrowserLang());
  }, []);

  return (
    <div className="App">
      <PageLayout collapsed />
    </div>
  );
};
export default App;
