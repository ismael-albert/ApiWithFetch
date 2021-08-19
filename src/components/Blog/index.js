
import { Content } from './styles'

function Blog(){

   const requisicao = fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
             return response.json()
            }).then(jsonBody => {
               const jsonbody = jsonBody;
            });
        
       
       //clima: https://www.metaweather.com/api/

    return(
       <Content>

      {}

       </Content>
    )
}
export default Blog;