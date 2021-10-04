import React from "react";
const Footer = () => {
      const styleFooter = {
        position:'absolute',
        bottom:'0%',
        top: '110%',
        width: '100%',
        height: '11%',
        backgroundColor: 'rgba(0, 1, 1, 0.14)',
      }
    return(
        <div class="text-center p-4" style={styleFooter} >
            © 2021 Copyright:
            <a class="text-reset fw-bold" href="*">Certain School.com</a>
          </div>
  )
}

export default Footer;