import {FiSearch} from 'react-icons/fi';
import { useState } from 'react';
import api from './services/api';
import './style.css';
function App() {


  const [input,setInput] = useState("");
  const [cep,setCep] = useState({});

  
  async function alerta(){
    if(input === ''){
      alert("Preencha o Campo de Cep Para fazer uma busca");
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      
    } catch (error) {
      alert("erro ao buscar");
      setInput('')
    }
   
  }
  return (
    <div className="container">
      <h1 className="title">Buscador Cep</h1>

      <div className="containerInput">

          <input 
          type="" 
          name="teste" 
          placeholder="digite o cep"
          value={input}
          onChange={(evento)=>setInput(evento.target.value)}
          />
          <button  className="buttonSearch" onClick={alerta}>
            <FiSearch size={20} color="#fff" />
           
          </button>
      </div>

    {Object.keys(cep).length > 0 && (
        <main className="main">
          <ul>
            <h2>{cep.cep}</h2>
            
            <li>Rua: {cep.logradouro}</li>
            <li>Bairro: {cep.bairro}</li>
            <li>Localidade: {cep.localidade}</li>
            <li>UF: {cep.uf}</li>

          </ul>
        
      </main>

    )};

    


    </div>
  );
}

export default App;
