export default function produtos(req, res) {
  res.status(200).json([
    {id: 1, nome: "Caneta", preco: 5.60},
    {id: 2, nome: "Caderno", preco: 15},
    {id: 3, nome: "Lapis", preco: 2.00},
    {id: 4, nome: "Livro", preco: 45},
    {id: 5, nome: "Régua", preco: 1.50},
  ])
}
