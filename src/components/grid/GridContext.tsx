import { createContext } from 'react'
import { Breakpoint } from '../../style';
import { RecursivePartial } from '../../helper/common';

export interface GridContextType {
    columns: number | RecursivePartial<Breakpoint>
}
const GridContext = createContext<GridContextType>({
    columns: 12
});

export default GridContext
