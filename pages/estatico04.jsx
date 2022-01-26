//consumindo API com o metodo getStaticProps e utilizando a função async

//o método getStaticProps só é executado no lado no servidor

//conectado com /pages/api/produtos

export async function getStaticProps() {
  console.log("[server]gerando props para o componente...");
  const resp = await fetch("http://localhost:3000/api/produtos");
  const produtos = await resp.json();

  return {
    props: {
      produtos
    }
  }
}

export default function Estatico04(props){
  console.log("[Cliente] Renderizando o componente");
  function renderizarProdutos() {
    return props.produtos.map(produto => {
      return <li key={produto.id}>{produto.nome} tem preço de R${produto.preco}</li>
    })
  }

  return (
    <div>
      <h1>Estático #04</h1>
      <ul>
        {renderizarProdutos()}
      </ul>
    </div>
  )
}