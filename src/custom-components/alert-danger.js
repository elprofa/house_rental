import React from 'react'

const style={
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow: "none",
    backgroundImage: "none",
    fontFamily: 'Inter, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontWeight: "400",
    fontSize: "0.875rem",
    lineHeight: "1.5",
    letterSpacing:" 0.15px",
    display: "flex",
    padding: "6px 16px",
    borderRadius: "5px",
    color: "rgb(224, 66, 71)",
    backgroundColor: "rgba(255, 76, 81, 0.12)",
    marginBottom:'15px'
}
function AlertDanger(props) {
    
  return (
    <div style={style}
    className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded 
      MuiPaper-elevation0 MuiAlert-root MuiAlert-standardError 
      MuiAlert-standard css-1u43w57" role="alert">
        <div className="MuiAlert-icon css-1l54tgj">
            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ErrorOutlineIcon">
            <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
            </svg>
        </div>
        <div className="MuiAlert-message css-1w0ym84">{props.texte}</div>
    </div>
  )
}

export default AlertDanger