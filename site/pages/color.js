import { colors } from './style'

const Color = (props) => {
    const { name } = props
    return (
        <div css={colors} className="colors">
            <div style={{ background: `rgb(var(--tui-${name}-1))` }}>--tui-{name}-1</div>
            <div style={{ background: `rgb(var(--tui-${name}-2))` }}>--tui-{name}-2</div>
            <div style={{ background: `rgb(var(--tui-${name}-3))` }}>--tui-{name}-3</div>
            <div style={{ background: `rgb(var(--tui-${name}-4))` }}>--tui-{name}-4</div>
            <div style={{ background: `rgb(var(--tui-${name}-5))` }}>--tui-{name}-5</div>
            <div className="reverse" style={{ background: `rgb(var(--tui-${name}-6))`, color: `var(--tui-color-background-2)` }} >--tui-{name}-6</div>
            <div className="reverse" style={{ background: `rgb(var(--tui-${name}-7))`, color: `var(--tui-color-background-2)` }} >--tui-{name}-7</div>
            <div className="reverse" style={{ background: `rgb(var(--tui-${name}-8))`, color: `var(--tui-color-background-2)` }} >--tui-{name}-8</div>
            <div className="reverse" style={{ background: `rgb(var(--tui-${name}-9))`, color: `var(--tui-color-background-2)` }} >--tui-{name}-9</div>
            <div className="reverse" style={{ background: `rgb(var(--tui-${name}-10))`, color: `var(--tui-color-background-2)` }} >--tui-{name}-10</div>
        </div>
    )
}

export default () => {
    return (
        <div>
            <h1>Color</h1>
            <h2>Color:</h2>
            <div>
                <Color name="red"></Color>
            </div>
            <div>
                <Color name="blue"></Color>
            </div>
            <div>
                <Color name="gray"></Color>
            </div>
        </div>
    )

}