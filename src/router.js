import React from 'react';
import { Router } from 'dva/router';
import Home from "./routes/Home";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Home/>
    </Router>
  );
}

export default RouterConfig;
