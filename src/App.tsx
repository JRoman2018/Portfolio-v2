import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/global";
import { Analytics } from "@vercel/analytics/react";

import "react-toastify/dist/ReactToastify.css";
import { footerProps, headerProps, mainProps } from "./constants/settings";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header name={headerProps.name} resume={headerProps.resume} />
      <Main {...{ ...mainProps }} />
      <Analytics />
      <Footer socialMedias={footerProps.socialMedias} />
    </>
  );
}

export default App;
