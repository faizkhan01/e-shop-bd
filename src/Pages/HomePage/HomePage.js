import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import ConfirmOrder from "../ConfirmOrder/ConfirmOrder";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Authentication from "../Authentication/Authentication";
import NotFound from "../NotFound/NotFound";
import ProductsDetails from "../ProductDetails/ProductsDetails";
import ReviewCart from "../ReviewCart/ReviewCart";
import UserProfileMain from "../UserProfile/UserProfileMain";
import HomePageItem from "./HomePageItem";
import HeaderPart from "./Header/HeaderPart";
import "./home.css";



const HomePage = () => {
  return (
    <div>
      <HeaderPart />
      {/* <Link to="/review-order">order</Link> */}
      <Switch>
        
          <Route path="/user/:form">
            <Authentication />
          </Route>
          <Route path="/product-details/:productId">
            <ProductsDetails />
          </Route>
          <Route path="/user-profile">
            <UserProfileMain />
          </Route>
          <Route path="/review-order">
            <ReviewCart />
          </Route>
          <ProtectedRoute path="/place-order">
            <ConfirmOrder />
          </ProtectedRoute>
          <Route exact path="/">
            <HomePageItem />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        
      </Switch>
    </div>
  );
};

export default HomePage;
