
import { Content } from './styles'
import { Link } from 'react-router-dom'
function Navbar() {
    return(
        <Content>
            <nav>
              
                    
                    <ul>
                        
                       <Link to="/"><li>HOME</li></Link>
                       <Link to="/github"><li>GITHUB</li></Link>
                        <Link to="/blog"><li>BLOG</li></Link>
                       
                        
                    </ul>
              
            </nav>
        </Content>
    )
}
export default Navbar;