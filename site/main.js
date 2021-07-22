import React, {useEffect} from 'react';
import Helmet from "react-helmet";
import ReactDOM from 'react-dom';
import {
    NavLink,
    Redirect,
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Menu} from "../src";
import "../src/menu/style";
import Spinner from "./components/spinner"
import loadable, {Loading} from "./helper/loadable";
import "./main.css"

const Buttons = loadable(import(/* webpackChunkName: "buttons" */"./pages/buttons"));
//import Buttons from "./pages/buttons"

const Root = () => {
    return <Router>
        <main>
            <div className="menu">
                <Menu>
                    <Menu.Item>
                        <Loading />
                        <NavLink to="/buttons">Buttons</NavLink>
                    </Menu.Item>
                </Menu>
            </div>
            <div className="content">
                <Switch>    
                    <Redirect exact path="/" to="/buttons"/>
                    <Route strict path="/buttons">
                        <Helmet title="Buttons - TeaTak" />
                        <Buttons/>
                    </Route>
                </Switch>
            </div>
        </main>
    </Router>
};

const Main = () => {
    return <Root/>
};

ReactDOM.render(
    <Main/>,
    document.getElementById('root')
);