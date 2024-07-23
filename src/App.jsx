import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
      <p>안녕</p>
    </>
  );
}

export default App;
