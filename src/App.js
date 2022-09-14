import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
// const Shop = () => {
//   return (
//     <h1>I am shop Page</h1>
//   )
// }
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { useEffect } from "react";
// import { onAuthStateChangedListener, createUserDocumentFromAuth, getCurrentUser } from './utils/firebase/firebase.utils'
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./store/user/user.action";
const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    // getCurrentUser().then((user) => console.log(user));
    dispatch(checkUserSession())
  }, [])
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     dispatch(setCurrentUser(user));
  //     // console.log(user);
  //   });
  //   return unsubscribe;
  // }, [])
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>

        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />

      </Route >
    </Routes>

  )
}
export default App;
