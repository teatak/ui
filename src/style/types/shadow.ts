import { OverridableRecord } from './utils';
import { Size } from './theme'

export interface DefaultShadow extends Record<Size, string> { }
export interface ShadowOverrides { }
export interface Shadow extends OverridableRecord<DefaultShadow, ShadowOverrides, string> { }
