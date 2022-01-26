//como ele é um conteúdo que não depende de propriedades, pode se dizer que pode ser gerado de forma estática, por padrão é gerado de forma estatica.

//o useEffect no caso serve para deixar os conteúdos iguais tanto do lado do servidor quando do lado do cliente. E com isso traformar o conteúdo em conteúdo dinânmico.


import { useEffect, useState } from "react"

export default function Estático(){
  const [num, setNun] = useState(0);

  useEffect(()=> {
    setNun(Math.random())
  }, []);

  return (
    <div>
      <h1>Estático #01 - Versao 2.0</h1>
      <h2>{num}</h2>
    </div>
  )
}