db.produtos.find({ valoresNutricionais: 
  { $elemMatch: { tipo: "calorias", quantidade: { $lte: 500 } } } },
  { _id: 0, nome: 1 });