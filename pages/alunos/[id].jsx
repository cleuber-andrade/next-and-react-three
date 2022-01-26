//quando o fallback for false ele vai gerar um erro 404 de pagina não encontrada o id específico que foi colocado dentro do paths


export async function getStaticPaths(){
  const resp = await fetch(`http://localhost:3000/api/alunos/tutores`);
  const ids = await resp.json();

  const paths = ids.map(id =>{
    return{ params: {id}}
  }) 

  return {
    fallback: false, //404
    paths
  }
}

export async function getStaticProps({ params }){
  const resp = await fetch(`http://localhost:3000/api/alunos/${params.id}`);
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