const Button = (props: { children: React.ReactNode }) => {
    const { children } = props
    return <button>{children}</button>
}

export default Button