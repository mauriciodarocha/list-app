import { render } from './src/app-controls/AppControls'
import App from './src/App'
import './style.css'

document.addEventListener('DOMContentLoaded',() => {
  render(App, "", document.getElementById('root'))
})