import './Footer.css';
import logo from './powerwhite.png'
import insta from './insta.svg'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import whatsapp from './whatsapp.svg'


export default function Footer() {
  return (
    <div className='footer-bx'>
        <div className='top-bx'> 
        <img src={logo} width={100}/>
        <div className='right-ft-bx'>
         <a className='insta' href={''}><img src={insta}/></a>
         <a className='facebook' href={''}><img src={facebook}/></a>
         <a className='twitter' href={''}><img src={twitter}/></a>
         <a className='whatsapp' href={''}><img src={whatsapp}/></a>
        </div>
        </div>
      <div className='btm-of-ft-bx'>
      <h1 className='innr-btm-of-ft-bx-hdr'>Company</h1>
      <div className='innr-btm-of-ft-bx'>
       <a className='sprd-lnks-in-ft-bx-frst' href={''}>About us</a>
       <a className='sprd-lnks-in-ft-bx' href={''}>Press</a>
       <a className='sprd-lnks-in-ft-bx' href={''}>Events</a>
       <a className='sprd-lnks-in-ft-bx' href={''}>investors</a>
       <a className='sprd-lnks-in-ft-bx' href={''}>Terms of use</a>
       <a className='sprd-lnks-in-ft-bx' href={''}>Privacy policy</a>
       <a className='sprd-lnks-in-ft-bx-lst' href={''}>Contact us</a>
      </div>
      </div>
      <h1 className='ft-bx-copyright'>© power 2021 - All Rights Reserved</h1>
    </div>
  )
}
