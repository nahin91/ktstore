import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {
  getCurrentUser
} from "./utils/firebase/firebase.utils";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch(); //this dispatch will never get updated, remains same
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1250);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1250);
  };

  useEffect(() => {
    dispatch(checkUserSession())
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });



  return (
    <div style={{padding: `0px ${isDesktop? '5%' : '0px'}`}}>
      <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
    </div>
  );
};

export default App;
