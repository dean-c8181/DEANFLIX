import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/Home";
import tv from "../Routes/TV";
import Search from "../Routes/Search";

export default () => (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={tv} />
        <Route path="/search" exact component={Search} />
    </Router>
)