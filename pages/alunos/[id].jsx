//quando o fallback for false ele vai gerar um erro 404 de pagina não encontrada o id específico que foi colocado dentro do paths


export function getStaticPaths(){
  return {
    fallback: false,
    paths: [
      {params: { id: "107"}},
      {params: { id: "203"}},
      {params: { id: "1346"}},
    ]
  }
}

export function getStaticProps(){
  return {
    props: {

    }
  }
}

export default function AlunoPorId(){
  return (
    <div>
      <h1>Detalhes do Aluno</h1>
    </div>
  )
}