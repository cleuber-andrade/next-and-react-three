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

export async function getStaticProps(context){
  const resp = await fetch(`http://localhost:3000/api/alunos/${context.params.id}`);
  const aluno = await resp.json();
  
  return {
    props: {
      aluno
    }
  }
}

export default function AlunoPorId(props){
  const { aluno } = props;

  return (
    <div>
      <h1>Detalhes do Aluno</h1>
      <ul>
        <li>{aluno.id}</li>
        <li>{aluno.nome}</li>
        <li>{aluno.email}</li>
      </ul>
    </div>
  )
}