
import './Body.css';
import Logo from './Logo.png';
import Woman from './Woman.png'

export default function Body() {
  return (
    <div className='hero-sec'>
    <div className='lft-hero'>
    <h1 className='first-hdr'>We design impactful</h1>
    <div className='prd-bx'>
    <h1 className='scnd-hdr'>Digital</h1>
    <img className='product' src={Logo} width={100}/>
    </div>
    <p className='shrt-phrse'>Help find solutions with intitutive and in accordance with client business goals. we provide a high-quality services.</p>
    <div className='contact-bx'>
    <a className='contact' href=''>Contact us</a>
    <div className='svg-bx'>
    <a href=''><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.15" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#706FE5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.9735 23.0916C30.6766 23.4981 30.6744 24.5 29.9735 24.9065L22.1161 29.4766C21.4085 29.8897 20.5 29.3931 20.5 28.5692V19.4268C20.5 18.5083 21.4777 18.148 22.1161 18.5193L29.9735 23.0916Z" fill="#706FE5"/>
</svg></a>
<span className='txt-bx-2'>watch our introduction video</span>
    </div>
    </div>
    </div>
      <div className='woman77'>
       <img src={Woman} width={300}/>
      </div>
    </div>
  )
}
