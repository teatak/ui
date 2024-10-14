import { OverridableRecord } from './utils';
import { Size } from './theme'

export interface DefaultRadius extends Record<Size, string> { }
export interface RadiusOverrides { }
export interface Radius extends OverridableRecord<DefaultRadius, RadiusOverrides, string> { }
