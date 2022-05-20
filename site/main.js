import React, { useEffect, useContext, useLayoutEffect } from 'react'
import Helmet from 'react-helmet'
import ReactDOM from 'react-dom/client'
import {
  useLocation,
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
import MenuData from './menu'

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

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

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

  const renderMenu = () => {
    let defaultOpenedKeys = []
    let defaultSelectedKeys = []
    const loop = (parent, items) => {
      return items.map((item) => {
        if (item.subMenu) {
          return <Menu.SubMenu
            key={item.name}
            title={<>
              {item.icon ? item.icon : null}{item.name}
            </>}
          >
            {loop(item, item.children)}
          </Menu.SubMenu>
        } else {
          let match = useMatch({ path: item.path, end: item.end });
          if (match) {
            defaultSelectedKeys.push(item.name)
            if (parent) {
              defaultOpenedKeys.push(parent.name)
            }
          }
          return <Menu.Item key={item.name}>
            <NavLink to={item.path}>{item.icon ? item.icon : null}{item.name}</NavLink>
          </Menu.Item>
        }
      })
    }

    let list = loop(null, MenuData)

    return <Menu
      defaultOpenedKeys={defaultOpenedKeys}
      defaultSelectedKeys={defaultSelectedKeys}
    >
      {list}
    </Menu>
  }

  const renderRouters = () => {
    return <Wrapper>
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
    </Wrapper>
  }

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
        {renderMenu()}
      </nav>
      <main className="content">
        <div className='content-page'>
          {renderRouters()}
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