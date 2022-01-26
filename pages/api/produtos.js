function numeroAleatorios(min = 1, max = 10000){
  return parseInt(Math.random() * (max - min)) + min
}


export default function produtos(req, res) {
  res.status(200).json([
    {id: numeroAleatorios(), nome: "Caneta", preco: 5.60},
    {id: numeroAleatorios(), nome: "Caderno", preco: 15},
    {id: numeroAleatorios(), nome: "Lapis", preco: 2.00},
    {id: numeroAleatorios(), nome: "Livro", preco: 45},
    {id: numeroAleatorios(), nome: "Régua", preco: 1.50},
  ])
}
