//a propriedade revalidade é para colocar de forma automática um refresh da página estática.


export function getStaticProps(){
  return { 
    revalidade: 7, //segundos     
    props: {      
      numero: Math.random()
    },
      
  }
}

export default function Estatico03(props){
  return (
    <div>
      <h1>Estático #03</h1>
      <h2>{props.numero}</h2>
    </div>
  )
}