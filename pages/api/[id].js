export default function handler(req, res){
  const id = +req.query.id;
  res.status(200).json({
    id: 123,
    nome: "João Almeida",
    email: "joaoalmeida24@hotmail.com",
  })
}