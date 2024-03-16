import { useState, useEffect } from "react";

export default function App() {

  // estados
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState(0);
  const [cor, setCor] = useState();

  // captura de valores
  const capturarPrimeiroValor = (item) => {
    setPrimeiroValor(Number(item.target.value));
  };

  const CapturarSegundoValor = (item) => {
    setSegundoValor(Number(item.target.value));
  };

  // cálculos
  const Somar = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const Diminuir = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const Multiplicar = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const Dividir = () => {
    setResultado(primeiroValor / segundoValor);
  };

  // mudança de cores

  useEffect(() => {

    // forma mais dificil
    // nessa forma estamos transformando o resultado do cálculo do tipo
    // númerico para o tipo string e na condicional comparando 
    const primeiroDigito = resultado.toString() 

    if(primeiroDigito[0]=== "1"){
      console.log("teste")
      setCor("#aacc00")
    } else if(primeiroDigito[0]=== "2"){
      setCor("#ff7096")
    } else if(primeiroDigito[0]=== "3"){
      setCor("#bc00dd")
    } else if(primeiroDigito[0]=== "4"){
      setCor("#ff7900")
    } else if(primeiroDigito[0]=== "5"){
      setCor("#ffea00")
    } else if(primeiroDigito[0]=== "6"){
      setCor("#80ffdb")
    } else if(primeiroDigito[0]=== "7"){
      setCor("#d00000")
    } else if(primeiroDigito[0]=== "8"){
      setCor("#2d00f7")
    } else{
      setCor("#c71f37")
    }

    // forma fácil sem usar string

    // if(resultado === 1){
    //   setCor("#aacc00")
    // } else if(resultado === 2){
    //   setCor("#ff7096")
    // } else if(resultado === 3){
    //   setCor("#bc00dd")
    // } else if(resultado === 4){
    //   setCor("#ff7900")
    // } else if(resultado === 5){
    //   setCor("#ffea00")
    // } else if(resultado === 6){
    //   setCor("#80ffdb")
    // } else if(resultado === 7){
    //   setCor("#d00000")
    // } else if(resultado === 8){
    //   setCor("#2d00f7")
    // } else if(primeiroDigito === 9){
    //   setCor("#c71f37")
    // } else if(resultado === 10){
    //   setCor() 
    // }
     
  }, [resultado]);

  return (
    <>
    {/* Aqui estamos modificando a cor de fundo através do DOM o useEffect muda o valor
        do estado cor conforme o resultado do cálculo que será comparado pelo if/else
    */}
      <div style={{backgroundColor:`${cor}`}}>
        
        <input type="number" onChange={capturarPrimeiroValor} />
        
        <input type="number" onChange={CapturarSegundoValor} />
        
        <button onClick={Somar}>+</button>
        <button onClick={Diminuir}>-</button>
        <button onClick={Multiplicar}>*</button>
        <button onClick={Dividir}>/</button>
        
        <h1>{resultado}</h1>
      </div>
    </>
  );
}
