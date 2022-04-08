import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import ReactDOM from 'react-dom'
import {
  NavLink,
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { Menu, ColorMode, Button } from '../src'
import '../src/menu/style'
import '../src/color-mode/style'

import { Progress, Loading } from './helper/loading'
import loadable from '@loadable/component'

import './main.less'
import Spinner from '../src/svg/icons/Spinner'

const fallback = {
  fallback: <Progress />,
}

const PageDemo = loadable(() => import('./pages/demo'), fallback)
const PageColor = loadable(() => import('./pages/color'), fallback)
const PageInput = loadable(() => import('./pages/input'), fallback)
const PageSelect = loadable(() => import('./pages/select'), fallback)
const PageButton = loadable(() => import('./pages/button'), fallback)
const PageForm = loadable(() => import('./pages/form'), fallback)
const PageGrid = loadable(() => import('./pages/grid'), fallback)
const PageSpace = loadable(() => import('./pages/space'), fallback)
const PageModal = loadable(() => import('./pages/modal'), fallback)
const PageTrigger = loadable(() => import('./pages/trigger'), fallback)
const PageCheck = loadable(() => import('./pages/check'), fallback)
const PageRadio = loadable(() => import('./pages/radio'), fallback)
const PageAlert = loadable(() => import('./pages/alert'), fallback)
const PageNotification = loadable(() => import('./pages/notification'), fallback)

const Root = () => {
  return (
    <div className="page">
      <header className="header">
        <div>
          {/* <Button type="outlined" color="error"><Spinner /></Button> */}
        </div>
      </header>
      <nav className="menu">
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
      </nav>
      <main className="content">
        <div className='content-page'>
          <Routes>
            <Route path="/" element={<Navigate to="/button" replace />} />
            <Route path="/demo" element={<>
              <Helmet title="Demo - TeaTak" />
              <PageDemo />
            </>} />
            <Route strict path="/color" element={<>
              <Helmet title="Color - TeaTak" />
              <PageColor />
            </>} />
            <Route strict path="/button" element={<>
              <Helmet title="Button - TeaTak" />
              <PageButton />
            </>} />
            <Route strict path="/input" element={<>
              <Helmet title="Input - TeaTak" />
              <PageInput />
            </>} />
            <Route strict path="/select" element={<>
              <Helmet title="Select - TeaTak" />
              <PageSelect />
            </>} />
            <Route strict path="/check" element={<>
              <Helmet title="Check - TeaTak" />
              <PageCheck />
            </>} />
            <Route strict path="/radio" element={<>
              <Helmet title="Radio - TeaTak" />
              <PageRadio />
            </>} />
            <Route strict path="/form" element={<>
              <Helmet title="Form - TeaTak" />
              <PageForm />
            </>} />
            <Route strict path="/grid" element={<>
              <Helmet title="Grid - TeaTak" />
              <PageGrid />
            </>} />
            <Route strict path="/space" element={<>
              <Helmet title="Space - TeaTak" />
              <PageSpace />
            </>} />
            <Route strict path="/modal" element={<>
              <Helmet title="Modal - TeaTak" />
              <PageModal />
            </>} />
            <Route strict path="/trigger" element={<>
              <Helmet title="Trigger - TeaTak" />
              <PageTrigger />
            </>} />
            <Route strict path="/alert" element={<>
              <Helmet title="Alert - TeaTak" />
              <PageAlert />
            </>} />
            <Route strict path="/notification" element={<>
              <Helmet title="Notification - TeaTak" />
              <PageNotification />
            </>} />
          </Routes>
        </div>
        <div>
          <ColorMode.Menu fixed={true} className="content-fixed" />
        </div>
      </main>
    </div>
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