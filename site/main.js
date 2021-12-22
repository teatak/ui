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
import loadable, {Loading} from "./helper/loadable";

import "./main.css"

//const Button = lazy(() => import('./pages/button'));

const Button = loadable(import("./pages/button"));
const Input = loadable(import("./pages/input"));
const Form = loadable(import("./pages/form"));
const Grid = loadable(import("./pages/grid"));
const Space = loadable(import("./pages/space"));
const Modal = loadable(import("./pages/modal"));

//import Buttons from "./pages/buttons"

const Root = () => {
    return <Router>
        <main>
            <div className="menu">
                <Menu type="vertical">
                    <Menu.Item>
                        <NavLink to="/button">Button</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/input">Input</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/form">Form</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/grid">Grid</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/space">Space</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/modal">Modal</NavLink>
                    </Menu.Item>
                </Menu>
            </div>
            <div className="content">
                <Switch>    
                    <Redirect exact path="/" to="/button"/>
                    <Route strict path="/button">
                        <Helmet title="Button - TeaTak" />
                        <Button/>
                    </Route>
                    <Route strict path="/input">
                        <Helmet title="Input - TeaTak" />
                        <Input/>
                    </Route>
                    <Route strict path="/form">
                        <Helmet title="Form - TeaTak" />
                        <Form/>
                    </Route>
                    <Route strict path="/grid">
                        <Helmet title="Grid - TeaTak" />
                        <Grid/>
                    </Route>
                    <Route strict path="/space">
                        <Helmet title="Space - TeaTak" />
                        <Space/>
                    </Route>
                    <Route strict path="/modal">
                        <Helmet title="Modal - TeaTak" />
                        <Modal/>
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