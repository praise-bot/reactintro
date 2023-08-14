import './Comments.css';
import left from './left.png';
import right from './right.png';
import one from './One.png';
import two from './two.png';
import three from './three.png';
import four from './four.png';
import five from './five.png';


export default function Comments() {
  return (
    <div>
      <div className='comment-bx'>

  <h1 className='main-hdr'>Let's Hear <br/> What They say</h1>
  <div className='txt-bx'>
  <img className='left' src={left} width={40} height={30}/>
  <p className='cntr-bx'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt
  fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
  <img className='right' src={right} width={40} height={30}/>
  </div>
  <div className='img-comment-bx'>
  <div className='pixs'>
    <img  src={one} width={30}/>
  </div>
  <div className='pixs'>
  <img  src={two} width={40}/>
  </div>
  <div className='cntr-pic'>
    
    <img className='img-lft-i'  src={three} width={60}/>
  
      <h4 className='ricky'>Ricky Aprilia</h4>
      <p className='founder'>Founder of Varibo</p>
   
  </div>
  <div className='pixs'>
  <img  src={four} width={40}/>
  </div>
  <div className='pixs'>
  <img src={five} width={30}/>
  </div>
  </div>
  </div>
    </div>
  )
}
