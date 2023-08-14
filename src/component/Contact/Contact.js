import './Contact.css';
import woman from './woman.png'
import luca from  './luca.png'
import lady from './ladytl.png'
import text from './Text.png'
import black from './blck-lady.png'




export default function Contact() {
  return (
    <div>
     <div className='parnt-bx' >
      <h1 className='main-hdr-1'>We Create World-Class Digital Product </h1>
      <p className='main-hdr-p'>By information about design the world to the best instructors heatc helping by information</p>
      <div className='img-bx'>
      <div className='lft-img'>
      <figure>
      <img  src={woman} width={400}/>
      <figcaption className='fig'>
      <p className='p1'>App design june-20-2022</p>
      <h4 className='app-rdn-txt'>App Redesign</h4>
      <p className='p1-txt2'>By information about design the world to the best instructors heatc helping by information</p>
      </figcaption>
      </figure>
      </div>
      <div className='grid-img-bx'>
      <div className='grid-item1'>
        <figure>
        <img src={luca} width={200}/>
        <figcaption>
        <p className='grid-p1'>App design june-20-2022</p>
        <h5 className='grid-h5'>Redesign channel website landng page</h5>  
        </figcaption>
        </figure>
      </div>
      <div className='grid-item2'>
      <figure>
      <img src={lady} width={200}/>
      <figcaption>
      <p className='grid-p1'>App design june-20-2022</p>
      <h5 className='grid-h5'>New Locator App For a New Company</h5>  
      </figcaption>
      </figure>
      </div>
      <div className='grid-item3'>
       <figure>
       <img src={text} width={200}/>
      <figcaption>
      <p className='grid-p1'>App design june-20-2022</p>
      <h5 className='grid-h5'>Rental Rooms Web App Platform </h5>  
      </figcaption>
      </figure>
        </div>
      <div className='grid-item4'>
      <figure>  
        <img src={black} width={200}/>
        <figcaption>
        <p className='grid-p1'>App design june-20-2022</p>
        <h5 className='grid-h5'>Calendar App for Big SASS Company </h5>  
        </figcaption>
        </figure>
        </div>
      </div>
     </div>
     </div>

    </div>
  )
}
