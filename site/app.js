import { useLayoutEffect } from 'react'
import Helmet from 'react-helmet'
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
import loadable from '@loadable/component'
import { Progress } from './helper/loading'
import { prerenderGlobalStyle, ConfigProvider, Button } from '../src'
let style = {
    // base: {
    //     blue: "#3491FA",
    //     gray: "#3491FA",
    // }
}
prerenderGlobalStyle(style)
const fallback = {
    fallback: <Progress />,
}

const PageColor = loadable(() => import('./pages/color'))

const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
}

const App = () => {

    const renderRouters = () => {
        return <Wrapper>
            <Routes>
                <Route path="/" element={<Navigate to="/color" replace />} />
                <Route path="/demo" element={<>
                    <Helmet title="Demo - TeaTak" />
                </>} />
                <Route strict path="/color" element={<>
                    <Progress />
                    <Helmet title="Color - TeaTak" />
                    <PageColor />
                </>} />
            </Routes>
        </Wrapper>
    }

    return <ConfigProvider>
        <Router>
            <div className="page">
                <header className="header">
                    <div className="logo">

                    </div>
                    <div className="header-menu">
                        <a href="https://github.com/teatak/ui">
                            <Button type="outlined"></Button>
                        </a>
                    </div>
                </header>
                <main className="content">
                    <div className='content-page'>
                        {renderRouters()}
                    </div>
                </main>
            </div>
        </Router>
    </ConfigProvider>
}


export default App