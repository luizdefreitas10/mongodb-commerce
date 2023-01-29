db.produtos.updateMany({ nome: { $in: ["Big Mac"] } },
    { $currentDate: {
      ultimaModificacao: true,
      "cancellation.date": { $type: "timestamp" },
    },
$set: {
      "cancellation.reason": "user request",
    },
  });

db.produtos.find({ ultimaModificacao: { $exists: true } }, { _id: 0, nome: 1 });