import { colors } from './style'
import { css } from '@emotion/react'

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

const row = css`
    margin-left: -8px;
    margin-right: -8px;
    row-gap: 16px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    justify-content: flex-start;
    align-items: center;
`
const col = css`
    padding: 0px 8px;
    display: block;
    flex: 0 0 25%;
    max-width: 25%;
`

export default () => {
    return (
        <div css={css`
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 0 32px;
    max-width: 1100px;
`}>
            <h1>Color</h1>
            <h2>Color:</h2>
            <div css={row}>
                <div css={col}>
                    <Color name="red"></Color>
                </div>
                <div css={col}>
                    <Color name="pink"></Color>
                </div>
                <div css={col}>
                    <Color name="purple"></Color>
                </div>
                <div css={col}>
                    <Color name="deeppurple"></Color>
                </div>
                <div css={col}>
                    <Color name="blue"></Color>
                </div>
                <div css={col}>
                    <Color name="cyan"></Color>
                </div>
                <div css={col}>
                    <Color name="green"></Color>
                </div>
                <div css={col}>
                    <Color name="lime"></Color>
                </div>
                <div css={col}>
                    <Color name="yellow"></Color>
                </div>
                <div css={col}>
                    <Color name="amber"></Color>
                </div>
                <div css={col}>
                    <Color name="orange"></Color>
                </div>
                <div css={col}>
                    <Color name="deeporange"></Color>
                </div>
                <div css={col}>
                    <Color name="gray"></Color>
                </div>
            </div>
        </div>
    )

}