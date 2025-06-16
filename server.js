const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());


app.use(express.json());


let gastos = [];
let nextId = 1;


app.get('/gastos', (req, res) => {
  res.json(gastos);
});


app.post('/gastos', (req, res) => {
  const { descricao, valor } = req.body;

  if (!descricao || descricao.trim() === '') {
    return res.status(400).json({ error: 'Descrição é obrigatória' });
  }

  const valorNum = parseFloat(valor);
  if (isNaN(valorNum) || valorNum <= 0) {
    return res.status(400).json({ error: 'Valor deve ser um número positivo' });
  }

  const novoGasto = { id: nextId++, descricao, valor: valorNum };
  gastos.push(novoGasto);
  res.status(201).json(novoGasto);
});


app.delete('/gastos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = gastos.findIndex(g => g.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Gasto não encontrado' });
  }

  gastos.splice(index, 1);
  res.status(204).send();
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
