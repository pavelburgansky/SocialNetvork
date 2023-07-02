import React from 'react'
const AllPrivate = () => {
    return (
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    );
  };
  
  export default AppRouter;