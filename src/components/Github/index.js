import { useState, useEffect } from 'react';

import { Content } from './styles'


function Github() {
  const [repositores, setRepositores] = useState([])

useEffect(async () => {
  const response = await fetch('https://api.github.com/users/ismael-albert/repos');
  const data = await response.json();

  setRepositores(data);

}, [])

useEffect(() => {
  const filtered = repositores.filter(repo => repo.favorite)


  document.title = `Você tem ${filtered.length} favoritos`;
}, [repositores])

function handleFavorite (id) {
  const newRepositories = repositores.map(repo => {
    return repo.id === id ? { ...repo, favorite: !repo.favorite} : repo
  });

  setRepositores(newRepositories);
}

  return (
    <Content>
      <ul>
        {repositores.map(repo => (
          <li key={repo.id}>
            {repo.name} 
            {repo.favorite && <span>(FAVORITO)</span>}
            <button onClick={()=>handleFavorite(repo.id)}>Favoritar</button>
            </li>
        ))}
      </ul>
    </Content>
  );
}

export default Github;
