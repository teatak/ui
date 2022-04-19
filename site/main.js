import React, { useEffect, useContext } from 'react'
import Helmet from 'react-helmet'
import ReactDOM from 'react-dom/client'
import {
  useMatch,
  useResolvedPath,
  NavLink as BaseNavLink,
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
import Github from './components/icons/github'
import { ArticleRounded, ToggleOffRounded } from '@mui/icons-material'
import MenuContext from '../src/menu/menu-context'


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

const NavLink = React.forwardRef((props, ref) => {
  const { ...rest } = props
  let resolved = useResolvedPath(props.to);

  let match = useMatch({ path: resolved.pathname, end: true });

  const menuContext = useContext(MenuContext)

  if (match) {
    // setTimeout(() => {
    //   menuContext.setSelectedKeys([props.to])
    // }, 0)
  }

  useEffect(() => {
    // if (match) {
    //   menuContext.setSelectedKeys([props.to])
    // }
  }, [])
  return (
    <BaseNavLink
      ref={ref}
      {...rest}
      className={({ isActive }) => {
        if (isActive) {
          // setTimeout(() => {
          //   menuContext.setSelectedKeys([props.to])
          // }, 0)
        }
        const classNames = [
          props.className,
          isActive ? "active" : null,
        ]
          .filter(Boolean)
          .join(" ")

        return classNames
      }}
    />
  );
});

const App = () => {
  // let resolved = useResolvedPath("/select");
  // let match = useMatch({ path: resolved.pathname, end: true });
  // console.log(match)
  return (
    <div className="page">
      <header className="header">
        <div className="logo">
          <img src="images/logo.png" />
          {/* <Button type="outlined" color="error"><Spinner /></Button> */}
        </div>
        <div className="header-menu">
          <a href="https://github.com/teatak/ui">
            <Button type="outlined" circle><Github /></Button>
          </a>
        </div>
      </header>
      <nav className="menu">
        <Menu
          defaultSelectedKeys={["/button"]}
          type="vertical">
          <Menu.SubMenu
            key="1"
            title={<>
              <ArticleRounded /> Getting Started
            </>}
          >
            <Menu.Item key="/color">
              <NavLink to="/color">Color</NavLink>
            </Menu.Item>
            <Menu.Item key="/button">
              <NavLink to="/button">Button</NavLink>
            </Menu.Item>
            <Menu.Item key="/input">
              <NavLink to="/input">Input</NavLink>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="2"
            title={<>
              <ToggleOffRounded /> Components
            </>}
          >
            <Menu.Item key="/select">
              <NavLink to="/select">Select</NavLink>
            </Menu.Item>
            <Menu.Item key="/check">
              <NavLink to="/check">Check</NavLink>
            </Menu.Item>
            <Menu.Item key="/radio">
              <NavLink to="/radio">Radio</NavLink>
            </Menu.Item>
            <Menu.Item key="/form">
              <NavLink to="/form">Form</NavLink>
            </Menu.Item>
            <Menu.Item key="/grid">
              <NavLink to="/grid">Grid</NavLink>
            </Menu.Item>
            <Menu.Item key="/space">
              <NavLink to="/space">Space</NavLink>
            </Menu.Item>
            <Menu.Item key="/modal">
              <NavLink to="/modal">Modal</NavLink>
            </Menu.Item>
            <Menu.Item key="/trigger">
              <NavLink to="/trigger">Trigger</NavLink>
            </Menu.Item>
            <Menu.Item key="/alert">
              <NavLink to="/alert">Alert</NavLink>
            </Menu.Item>
            <Menu.Item key="/notification">
              <NavLink to="/notification">Notification</NavLink>
            </Menu.Item>
          </Menu.SubMenu>

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
      <App />
    </Router>
  </ColorMode>
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container).render(<Main />)