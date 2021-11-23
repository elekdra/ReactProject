import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...restOfProps }) => {

  let auth = true
console.log("hey");
  console.log(restOfProps)
  return (
    <Route exact
      {...restOfProps}
      render={(props) => (auth ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

