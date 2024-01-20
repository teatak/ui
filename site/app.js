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
    //     blue: "#aaa",
    //     gray: "#aaa",
    // }
}
prerenderGlobalStyle(style)
const fallback = {
    fallback: <Progress />,
}

const PageVariable = loadable(() => import('./pages/variable'))

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
                <Route path="/" element={<Navigate to="/variable" replace />} />
                <Route path="/demo" element={<>
                    <Helmet title="Demo - TeaTak" />
                </>} />
                <Route strict path="/variable" element={<>
                    <Helmet title="Variable - TeaTak" />
                    <PageVariable />
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