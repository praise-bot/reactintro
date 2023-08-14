import './Header.css';
import logo from "./Logo.png";

export default function Header() {
  return (
    <div className='nav-bx'>
      <img className='lg' src={logo} width={100}/>
      <a className='lft-links' href="">Home</a>
      <a className='lft-links' href="">About us</a>
      <a className='lft-links' href="">services</a>
      <a className='lft-links' href="">products</a>
    </div>
  );
}
