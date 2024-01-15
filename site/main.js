import ReactDOM from 'react-dom/client'
import App from './app'

const Main = () => {
    return <App />
}

window.onload = () => {
    const root = ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
}