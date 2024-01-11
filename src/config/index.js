import React, { useEffect, useState, useRef, useContext, forwardRef } from "react"

const ConfigProvider = forwardRef((props, ref) => {
    const { children } = props;
    return <>{children}</>
})

export default ConfigProvider