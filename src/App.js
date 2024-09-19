import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import {router} from '/data/data/com.termux/files/home/news-protfolio/src/naveheader/routingPage.js';
function App() {
  return (<>
<RouterProvider router={router}>
</RouterProvider>
    </>);
}

export default App;
