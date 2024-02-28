import { buttonTheme, inputTheme } from '../components'
import { merge } from '../helper/common'
import { baseTheme } from './base'
export const injectControlThemes = () => {
    merge(baseTheme, buttonTheme, inputTheme)
}