import { ReactNode } from "react"

const Space = (props: { children: ReactNode }) => {
    const { children } = props
    return <div>{children}</div>
}

export default Space