import React from 'react'


const AppRouter = () => {
    return (
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    );
  };
  
  export default AppRouter;