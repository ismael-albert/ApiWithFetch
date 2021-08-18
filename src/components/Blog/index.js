
import { Content } from './styles'

function Blog(){

   const requisicao = fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
             return response.json()
            }).then(jsonBody => {
                console.log(jsonBody)
            });
        
       
         console.log(requisicao)

    return(
       <Content>
<h1> {requisicao}</h1>
      

       </Content>
    )
}
export default Blog;