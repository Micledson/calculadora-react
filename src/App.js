import React, {useState} from 'react'

function App() {
  const [valor1, setValor1] = useState(0)
  const [valor2, setValor2] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [operacao, setOperacao] = useState('')
  

  function handleValor1(event){
    setValor1(event.target.value)
  }
  function handleValor2(event){
    setValor2(event.target.value)
  }

 function submit(event) {
  event.preventDefault()
 }

 function adicao(){
  setOperacao('adição')
  setResultado(parseInt(valor1) + parseInt(valor2))
 }
 function subtracao(){
  setOperacao('subtração')
  setResultado(valor1 - valor2)
 }
 function multiplicacao(){
  setOperacao('multiplicação')
  setResultado(valor1 * valor2)
 }
 function divisao(){
  setOperacao('divisão')
  setResultado(valor1 / valor2)
 }


 return (
    <div>
      <form onSubmit={submit}>
        <input type='number'  placeholder='valor 1' onChange={handleValor1}/>
        <input type='number' placeholder='valor2'onChange={handleValor2}/>
        <input type='submit' value='adição' onClick={adicao}/>
        <input type='submit' value='subtração'onClick={subtracao}/>
        <input type='submit' value='multiplicação'onClick={multiplicacao}/>
        <input type='submit' value='divisão' onClick={divisao}/>
      </form>

      <h1>Resultado da {operacao} é {resultado}</h1>
    </div>
  )
}

export default App;
