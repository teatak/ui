import React from "react"

const Col = (props) => {

    const {style, className, prefixClass, gap, span, xs, sm, md, lg, xl, xxl, ...rest} = props;

    let classes = prefixClass 

    if (className) {
        classes += " " + className;
    }
    if(span) {
        classes += " " + prefixClass+"-span-"+span
    }
    if(xs) {
        classes += " " + prefixClass+"-xs-"+xs
    }
    if(sm) {
        classes += " " + prefixClass+"-sm-"+sm
    }
    if(md) {
        classes += " " + prefixClass+"-md-"+md
    }
    if(lg) {
        classes += " " + prefixClass+"-lg-"+lg
    }
    if(xl) {
        classes += " " + prefixClass+"-xl-"+xl
    }
    if(xxl) {
        classes += " " + prefixClass+"-xxl-"+xxl
    }

    let gapStyle = {
        padding: "0 "+gap/2+"px"
    }

    return <div className={classes} style={{...gapStyle,...style}}>      
        {props.children}
    </div>
}

Col.defaultProps = {
    prefixClass: "tui-col",
};

export default Col