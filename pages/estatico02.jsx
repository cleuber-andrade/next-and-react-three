//Esse método é referenciando que o conteúdo da pagina é um conteúdo estático.

//Esse método por sua vez, vai tentar obter a props do component apartir desse metodo getStaticProps

//esse método é chamado por padrão uma unica vez, quando fazemos a build do projeto. Existem excessões, mas veremos mais pra frete.

export function getStaticProps(){
  return {
    props: {
      numero: Math.random()
    }
  }
}

export default function Estatico02(props){
  return (
    <div>
      <h1>Estático #02</h1>
      <h2>{props.numero}</h2>
    </div>
  )
}