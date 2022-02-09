import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import ReactDOM from 'react-dom'
import {
  NavLink,
  Redirect,
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { Menu } from '../src'
import '../src/menu/style'
import { Progress, Loading } from './helper/loading'
import loadable from '@loadable/component'

import './main.css'

const Color = loadable(() => import('./pages/color'), fallback)
const Input = loadable(() => import('./pages/input'), fallback)
const Button = loadable(() => import('./pages/button'), fallback)
const Form = loadable(() => import('./pages/form'), fallback)
const Grid = loadable(() => import('./pages/grid'), fallback)
const Space = loadable(() => import('./pages/space'), fallback)
const Modal = loadable(() => import('./pages/modal'), fallback)

const fallback = {
  fallback: <Progress />,
}

const Root = () => {
  return (
    <Router>
      <main>
        <div className="menu">
          <Menu type="vertical">
            <Menu.Item>
              <NavLink to="/color">Color</NavLink>
            </Menu.Item>
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
            <Redirect exact path="/" to="/Button" />
            <Route strict path="/color">
              <Helmet title="Color - TeaTak" />
              <Color />
            </Route>
            <Route strict path="/button">
              <Helmet title="Button - TeaTak" />
              <Button />
            </Route>
            <Route strict path="/input">
              <Helmet title="Input - TeaTak" />
              <Input />
            </Route>
            <Route strict path="/form">
              <Helmet title="Form - TeaTak" />
              <Form />
            </Route>
            <Route strict path="/grid">
              <Helmet title="Grid - TeaTak" />
              <Grid />
            </Route>
            <Route strict path="/space">
              <Helmet title="Space - TeaTak" />
              <Space />
            </Route>
            <Route strict path="/modal">
              <Helmet title="Modal - TeaTak" />
              <Modal />
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  )
}

const Main = () => {
  return <Root />
}

ReactDOM.render(<Main />, document.getElementById('root'))
