import image from "../assets/3 (1).jpg"
import { Link } from 'react-router-dom'
import '../App.css'

function Card () {
    return(
        <>
        <div className="navbar">
            <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='event'>Event</Link></li>
            <li><Link to='program'>Program</Link></li>
            <li><Link to='contact'>Contact</Link></li>
            <button className="joinus"><Link to='join'>join us</Link></button>
            </ul>
        </div>
        <div className="displayfrex">
            <div className="left">
            <h1 className="firtsttitle">Business</h1>
            <h1>Conference Fest</h1>
            <p>Do your brainstorming and cultivate what will be
                your strategy for event, make sure whatever you decide
                is aligning with your business gools and strategies.
            </p>
            <button className="bigbuton">Register Now</button>
            </div>
        
            <div className="img">
            <img src={image}></img>
            </div>
        </div>
        </>
    )
}
export default Card;