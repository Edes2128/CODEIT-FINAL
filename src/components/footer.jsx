import React from 'react'

const date = new Date();
export default function Footer() {
    return (
        <footer className="footer" >

            <div className="footer-left">
                <img src="whitecode.png" alt="" width="120px" />
                <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '30%' }}>
                    <a className="a-link" href="https://www.instagram.com/develop_your_brand/" > <i className="fa fa-instagram"></i></a>
                    <a className="a-link" href="https://www.facebook.com/Code-IT-shpk-1922218121419737" ><i className="fa fa-facebook"></i></a>
                    <a className="a-link" href="https://www.linkedin.com/in/codeit-develop-your-brand-b9267a189/" ><i className="fa fa-linkedin"></i></a>
                </div>
            </div>

            <div className="footer-right">
                <p style={{ color: 'white' }} > Powered by CodeIT &copy; {date.getFullYear()} </p>
            </div>
        </footer>
    )
}
