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
import { Menu, ColorMenu } from '../src'
import '../src/menu/style'
import '../src/colormenu/style'

import { Progress, Loading } from './helper/loading'
import loadable from '@loadable/component'

import './main.less'

const fallback = {
  fallback: <Progress />,
}

const Demo = loadable(() => import('./pages/demo'), fallback)
const Color = loadable(() => import('./pages/color'), fallback)
const Input = loadable(() => import('./pages/input'), fallback)
const Select = loadable(() => import('./pages/select'), fallback)
const Button = loadable(() => import('./pages/button'), fallback)
const Form = loadable(() => import('./pages/form'), fallback)
const Grid = loadable(() => import('./pages/grid'), fallback)
const Space = loadable(() => import('./pages/space'), fallback)
const Modal = loadable(() => import('./pages/modal'), fallback)
const Trigger = loadable(() => import('./pages/trigger'), fallback)
const Check = loadable(() => import('./pages/check'), fallback)
const Radio = loadable(() => import('./pages/radio'), fallback)
const Alert = loadable(() => import('./pages/alert'), fallback)
const Notification = loadable(() => import('./pages/notification'), fallback)

const Root = () => {
  return (
    <Router>
      <main>
        <div className="menu">
          <Menu type="vertical">
            <Menu.Item>
              <NavLink to="/color" isActive={(match, location) => {
                console.log(match)
              }} >Color</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/button">Button</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/input">Input</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/select">Select</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/check">Check</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/radio">Radio</NavLink>
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
            <Menu.Item>
              <NavLink to="/trigger">Trigger</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/alert">Alert</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/notification">Notification</NavLink>
            </Menu.Item>
          </Menu>
        </div>
        <div className="content">
          <div className='content-page'>
            <Switch>
              <Redirect exact path="/" to="/button" />
              <Route strict path="/demo">
                <Helmet title="Demo - TeaTak" />
                <Demo />
              </Route>
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
              <Route strict path="/select">
                <Helmet title="Select - TeaTak" />
                <Select />
              </Route>
              <Route strict path="/check">
                <Helmet title="Check - TeaTak" />
                <Check />
              </Route>
              <Route strict path="/radio">
                <Helmet title="Radio - TeaTak" />
                <Radio />
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
              <Route strict path="/trigger">
                <Helmet title="Trigger - TeaTak" />
                <Trigger />
              </Route>
              <Route strict path="/alert">
                <Helmet title="Alert - TeaTak" />
                <Alert />
              </Route>
              <Route strict path="/notification">
                <Helmet title="Notification - TeaTak" />
                <Notification />
              </Route>
            </Switch>
          </div>
          <div className='content-fixed'>
            <ColorMenu />
          </div>
        </div>
      </main>
    </Router>
  )
}

const Main = () => {
  return <Root />
}

ReactDOM.render(<Main />, document.getElementById('root'))
