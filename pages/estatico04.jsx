//consumindo API com o metodo getStaticProps e utilizando a função async

//conectado com /pages/api/produtos

export async function getStaticProps() {
  const resp = await fetch("http://localhost:3000/api/produtos");
  const produtos = await resp.json();

  return {
    props: {
      produtos
    }
  }
}

export default function Estatico04(props){
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