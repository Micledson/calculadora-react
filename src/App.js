import React, {useState} from 'react'

function App() {
 const [valor1, setValor1] = useState(0)
 const [valor2, setValor2] = useState(0)
 const [resultado, setResultado] = useState('')
 const [verificarSeEleJaRealizouOperacao, setVer] = useState(false) //funfa pra ver se o cara ja escolheu uma operacao pra saber se o valor digitado é do valor 1 ou valor 2
 const [op, setOp] = useState()  //funfa pra me dizer qual operaçao o cara escolheu
 const [ponto, setPonto] = useState(0) //funfa pra ver e manter o controle de quantos . podem ter 

 function values(e){
  if(e.target.value === '.'){
    if(ponto > 0){
      return 0
    }else{
      setPonto(ponto + 1)
      if(verificarSeEleJaRealizouOperacao === false){
        setValor1(valor1 + e.target.value)
        setResultado(valor1 + e.target.value)
      }else{
        setValor2(valor2 + e.target.value)
        setResultado(valor2)
        setResultado(valor2 + e.target.value)
      }
     }
  }else{
    if(verificarSeEleJaRealizouOperacao === false){
        setValor1(valor1 + e.target.value)
        setResultado(valor1 + e.target.value)
      }else{
        setValor2(valor2 + e.target.value)
        setResultado(valor2)
        setResultado(valor2 + e.target.value)
      }
     }
  
    
 }

 function operacao(e){
  if(e.target.value === '='){
    if(op === '+'){
      setResultado(parseFloat(valor1) + parseFloat(valor2))
    }else if(op === '-'){
      setResultado(parseFloat(valor1) - parseFloat(valor2))
    }else if(op === '*'){
      setResultado(parseFloat(valor1) * parseFloat(valor2))
    }else if(op === '/'){
      setResultado(parseFloat(valor1) / parseFloat(valor2))
    }
    setValor1(0)
    setValor2(0)
    setPonto(0)
    setVer(false)
  }else if(e.target.value === '+'){
    setPonto(0)
    setOp('+')
    setVer(true)
  }else if(e.target.value === '-'){
    setPonto(0)
    setOp('-')
    setVer(true)
  }else if(e.target.value === '*'){
    setPonto(0)
    setOp('*')
    setVer(true)  
  }else if(e.target.value === '/'){
    setPonto(0)
    setOp('/')
    setVer(true)  
  }
 }

 function clear(){
   setValor1(0)
   setValor2(0)
   setResultado('')
   setPonto(0)
 }


 return(
   <div>
     {resultado}
     <form>
       <input type='button' value='7' onClick={values}/>
       <input type='button' value='8' onClick={values}/>
       <input type='button' value='9' onClick={values}/>
       <input type='button' value='/' onClick={operacao}/><br/>
       <input type='button' value='4' onClick={values}/>
       <input type='button' value='5' onClick={values}/>
       <input type='button' value='6' onClick={values}/>
       <input type='button' value='*' onClick={operacao}/><br/>
       <input type='button' value='1' onClick={values}/>
       <input type='button' value='2' onClick={values}/>
       <input type='button' value='3' onClick={values}/>
       <input type='button' value='-' onClick={operacao}/><br/>
       <input type='button' value='.' onClick={values}/> 
       <input type='button' value='0' onClick={values}/> 
       <input type='button' value='=' onClick={operacao}/> 
       <input type='button' value='+' onClick={operacao}/>
       <input type='button' value='C' onClick={clear}/>
        
     </form>
   </div>
 )
}

export default App;
