import { OverridableRecord } from './utils';
import { Size } from './theme'

export interface DefaultLineHeight extends Record<Size, string> { }
export interface LineHeightOverrides { }
export interface LineHeight extends OverridableRecord<DefaultLineHeight, LineHeightOverrides, string> { }
