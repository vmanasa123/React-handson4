
import { Link }from 'react-router-dom';
import '../App.css'
function Home(){
    return(
        <>
        
            <ul className='line'>
                <li> <Link to="/" className='link'> <h1>Home</h1></Link> </li>
                <li><Link to='/student' className='link'> <h1>Students</h1></Link> </li>
                <li> <Link to='/contact' className='link'> <h1>ContactUs</h1></Link></li>
            </ul>
       
        
        <h2>Home Page</h2>
        </>
    )
}
export default Home;