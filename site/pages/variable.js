import { color, row, col } from './style'
import { css } from '@emotion/react'

const Palette = (props) => {
    const { name } = props
    return (
        <div css={color}>
            <div style={{ background: `rgb(var(--tui-${name}-1))` }}>--tui-{name}-1</div>
            <div style={{ background: `rgb(var(--tui-${name}-2))` }}>--tui-{name}-2</div>
            <div style={{ background: `rgb(var(--tui-${name}-3))` }}>--tui-{name}-3</div>
            <div style={{ background: `rgb(var(--tui-${name}-4))` }}>--tui-{name}-4</div>
            <div style={{ background: `rgb(var(--tui-${name}-5))` }}>--tui-{name}-5</div>
            <div className="reverse" style={{ background: `rgb(var(--tui-${name}-6))` }} >--tui-{name}-6</div>
            <div className="reverse" style={{ background: `rgb(var(--tui-${name}-7))` }} >--tui-{name}-7</div>
            <div className="reverse" style={{ background: `rgb(var(--tui-${name}-8))` }} >--tui-{name}-8</div>
            <div className="reverse" style={{ background: `rgb(var(--tui-${name}-9))` }} >--tui-{name}-9</div>
            <div className="reverse" style={{ background: `rgb(var(--tui-${name}-10))` }} >--tui-{name}-10</div>
        </div>
    )
}

const spanDiv = css`
    padding: 8px 0;
    display: flex;
    align-items: center;
    span {
        margin: auto;
        padding: 8px;
    }
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
            <h1>变量和颜色</h1>
            <div></div>
            <h2>文字(Text)</h2>
            <div css={spanDiv}>
                <span style={{ color: "var(--tui-text-color-1)" }}>--tui-text-color-1</span>
                <span style={{ color: "var(--tui-text-color-2)" }}>--tui-text-color-2</span>
                <span style={{ color: "var(--tui-text-color-3)" }}>--tui-text-color-3</span>
                <span style={{ color: "var(--tui-text-color-4)" }}>--tui-text-color-4</span>
            </div>
            <h2>背景色(Background)</h2>
            <div css={spanDiv}>
                <span style={{ backgroundColor: "var(--tui-background-color-1)" }}>--tui-background-color-1</span>
                <span style={{ backgroundColor: "var(--tui-background-color-2)" }}>--tui-background-color-2</span>
                <span style={{ backgroundColor: "var(--tui-background-color-3)" }}>--tui-background-color-3</span>
                <span style={{ backgroundColor: "var(--tui-background-color-4)" }}>--tui-background-color-4</span>
            </div>
            <h2>边框(Border)</h2>
            <div css={spanDiv}>
                <span style={{ border: "2px solid var(--tui-border-color-1)" }}>--tui-border-color-1</span>
                <span style={{ border: "2px solid var(--tui-border-color-2)" }}>--tui-border-color-2</span>
                <span style={{ border: "2px solid var(--tui-border-color-3)" }}>--tui-border-color-3</span>
                <span style={{ border: "2px solid var(--tui-border-color-4)" }}>--tui-border-color-4</span>
            </div>
            <h2>尺寸(Size)</h2>
            <div css={spanDiv}>
                <span style={{ fontSize: "var(--tui-size-mini)" }}>--tui-size-mini</span>
                <span style={{ fontSize: "var(--tui-size-small)" }}>--tui-size-small</span>
                <span style={{ fontSize: "var(--tui-size-medium)" }}>--tui-size-medium</span>
                <span style={{ fontSize: "var(--tui-size-large)" }}>--tui-size-large</span>
            </div>
            <h2>调色板</h2>
            <div>
                调色板包含了12个基本的颜色。每种颜色以6号颜色为基准，生成了10个梯度。并对深色和灰色进行了微调。用户可根据喜好使用自定义样式对调色板进行个性化设置。
            </div>
            <div css={row}>
                <div css={col}>
                    <Palette name="primary"></Palette>
                </div>
                <div css={col}>
                    <Palette name="red"></Palette>
                </div>
                <div css={col}>
                    <Palette name="orange"></Palette>
                </div>
                <div css={col}>
                    <Palette name="yellow"></Palette>
                </div>
                <div css={col}>
                    <Palette name="green"></Palette>
                </div>
                <div css={col}>
                    <Palette name="mint"></Palette>
                </div>
                <div css={col}>
                    <Palette name="cyan"></Palette>
                </div>
                <div css={col}>
                    <Palette name="blue"></Palette>
                </div>
                <div css={col}>
                    <Palette name="indigo"></Palette>
                </div>
                <div css={col}>
                    <Palette name="purple"></Palette>
                </div>
                <div css={col}>
                    <Palette name="pink"></Palette>
                </div>
                <div css={col}>
                    <Palette name="gray"></Palette>
                </div>
            </div>
        </div>
    )
}