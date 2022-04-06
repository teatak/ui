import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import ReactDOM from 'react-dom'
import {
  NavLink,
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  useMatch,
} from 'react-router-dom'
import { Menu, ColorMode } from '../src'
import '../src/menu/style'
import '../src/color-mode/style'

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
  let match = useMatch({ path: "/button", end: true });
  console.log(match)
  return (
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
          <Routes>
            <Route path="/" element={<Navigate to="/button" replace />} />
            <Route path="/demo" element={<>
              <Helmet title="Demo - TeaTak" />
              <Demo />
            </>} />
            <Route strict path="/color" element={<>
              <Helmet title="Color - TeaTak" />
              <Color />
            </>} />
            <Route strict path="/button" element={<>
              <Helmet title="Button - TeaTak" />
              <Button />
            </>} />
            <Route strict path="/input" element={<>
              <Helmet title="Input - TeaTak" />
              <Input />
            </>} />
            <Route strict path="/select" element={<>
              <Helmet title="Select - TeaTak" />
              <Select />
            </>} />
            <Route strict path="/check" element={<>
              <Helmet title="Check - TeaTak" />
              <Check />
            </>} />
            <Route strict path="/radio" element={<>
              <Helmet title="Radio - TeaTak" />
              <Radio />
            </>} />
            <Route strict path="/form" element={<>
              <Helmet title="Form - TeaTak" />
              <Form />
            </>} />
            <Route strict path="/grid" element={<>
              <Helmet title="Grid - TeaTak" />
              <Grid />
            </>} />
            <Route strict path="/space" element={<>
              <Helmet title="Space - TeaTak" />
              <Space />
            </>} />
            <Route strict path="/modal" element={<>
              <Helmet title="Modal - TeaTak" />
              <Modal />
            </>} />
            <Route strict path="/trigger" element={<>
              <Helmet title="Trigger - TeaTak" />
              <Trigger />
            </>} />
            <Route strict path="/alert" element={<>
              <Helmet title="Alert - TeaTak" />
              <Alert />
            </>} />
            <Route strict path="/notification" element={<>
              <Helmet title="Notification - TeaTak" />
              <Notification />
            </>} />
          </Routes>
        </div>
        <div className='content-fixed'>
          <ColorMode.Menu />
        </div>
      </div>
    </main>
  )
}

const Main = () => {
  return <ColorMode>
    <Router>
      <Root />
    </Router>
  </ColorMode>
}

ReactDOM.render(<Main />, document.getElementById('root'))