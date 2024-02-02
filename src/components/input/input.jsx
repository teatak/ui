import React, { forwardRef } from "react"
import { withGlobalVariable } from '../../style'

export default withGlobalVariable(forwardRef((props, ref) => {
    return <input ref={ref} />
}))

