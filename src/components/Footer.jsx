import React from "react";
function Footer(){
    const date= new Date();
    const year=date.getFullYear();
    return(
        <footer>
        <p>copyright reserved by {year}</p>
        </footer>
    )
}
export default Footer;