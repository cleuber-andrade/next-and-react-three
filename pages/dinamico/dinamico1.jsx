//O getServerSideProps é utilizado para ser renderizado todas as vezes no lado do servidor, ou seja, toda vez que o cliente acessa uma informação ele faz a rederização pelo o lado do servidor primeiro e só depois exibe as informações ao cliente.

//o recomendado é utilizar o SSR(Server Side Render), apenas quando for site que precisem de atualizações em tempo real. Por exmplo(aplicativos de bancos, e-commerce, site onde o cliente tem perfil muito personalizado e etc.) 


export function getServerSideProps(){
  console.log("[server]gerando props para o componente...");
  return {
    props: {
      numero: Math.random()
    }
  }
}

export default function Dinâmico2(props){
  return (
    <div>
      <h1>Dinâmico #01</h1>
      <h2>{props.numero}</h2>
    </div>
  )
}