import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3001/gastos';

export default function App() {
  const [gastos, setGastos] = useState([]);
  const [historico, setHistorico] = useState([]);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    async function carregarGastos() {
      setCarregando(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setGastos(data);
      } catch {
        setErro('Erro ao carregar gastos');
      } finally {
        setCarregando(false);
      }
    }
    carregarGastos();
  }, []);

  async function adicionarGasto(e) {
    e.preventDefault();
    if (!descricao.trim()) return setErro('Descrição é obrigatória');
    const valorNum = parseFloat(valor);
    if (isNaN(valorNum) || valorNum <= 0) return setErro('Valor deve ser positivo');
    setErro('');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ descricao, valor: valorNum }),
      });
      if (!res.ok) {
        const err = await res.json();
        return setErro(err.error || 'Erro ao adicionar gasto');
      }
      const novo = await res.json();
      setGastos(prev => [...prev, novo]);
      setDescricao('');
      setValor('');
    } catch {
      setErro('Erro ao conectar com a API');
    }
  }

  async function removerGasto(id) {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (res.status === 204) {
        const gastoRemovido = gastos.find(g => g.id === id);
        setGastos(prev => prev.filter(g => g.id !== id));
        setHistorico(prev => [gastoRemovido, ...prev]);
      } else {
        setErro('Erro ao remover gasto');
      }
    } catch {
      setErro('Erro ao conectar com a API MY FINANCE');
    }
  }

  
  function limparHistorico() {
    setHistorico([]);
  }

  const total = gastos.reduce((acc, g) => acc + g.valor, 0);

  return (
    <div className="flex flex-col lg:flex-row h-full gap-6 p-6">
     
      <section className="flex flex-col bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg flex-1 overflow-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center text-white">Adicionar Gasto</h2>
        <form onSubmit={adicionarGasto} className="flex flex-col gap-4 flex-grow">
          <div>
            <label htmlFor="descricao" className="block text-white font-medium mb-2">Descrição</label>
            <input
              id="descricao"
              type="text"
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
              className="w-full rounded px-4 py-3 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: Supermercado"
            />
          </div>
          <div>
            <label htmlFor="valor" className="block text-white font-medium mb-2">Valor (R$)</label>
            <input
              id="valor"
              type="number"
              step="0.01"
              value={valor}
              onChange={e => setValor(e.target.value)}
              className="w-full rounded px-4 py-3 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: 150.50"
            />
          </div>
          {erro && <p className="text-red-400 font-semibold">{erro}</p>}
          <button
            type="submit"
            className="mt-auto bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-4 rounded text-xl"
          >
            Adicionar
          </button>
        </form>
      </section>

     
      <section className="flex flex-col bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg flex-1 overflow-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center text-white">Controle de Gastos</h2>

        
        <button
          onClick={limparHistorico}
          className="mb-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded"
        >
          Limpar Histórico
        </button>

        {carregando ? (
          <p className="text-center text-white text-lg flex-grow flex items-center justify-center">
            Carregando gastos...
          </p>
        ) : gastos.length === 0 ? (
          <p className="text-center text-white text-lg flex-grow flex items-center justify-center">
            Nenhum gasto cadastrado.
          </p>
        ) : (
          <table className="min-w-full text-white border-separate border-spacing-y-2 table-fixed">
            <thead>
              <tr className="bg-blue-700 rounded-lg">
                <th className="text-left px-6 py-3 rounded-l-lg w-2/3">Descrição</th>
                <th className="text-right px-6 py-3 w-1/6">Valor (R$)</th>
                <th className="text-center px-6 py-3 rounded-r-lg w-1/6">Ações</th>
              </tr>
            </thead>
            <tbody>
              {gastos.map((gasto, idx) => (
                <tr
                  key={gasto.id}
                  className={idx % 2 === 0 ? 'bg-white bg-opacity-10' : 'bg-white bg-opacity-5'}
                >
                  <td className="px-6 py-4 truncate">{gasto.descricao}</td>
                  <td className="text-right px-6 py-4">{gasto.valor.toFixed(2)}</td>
                  <td className="text-center px-6 py-4">
                    <button
                      onClick={() => removerGasto(gasto.id)}
                      className="text-red-500 hover:underline font-semibold"
                      aria-label={`Remover gasto ${gasto.descricao}`}
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="font-bold bg-blue-800">
                <td className="px-6 py-4 rounded-bl-lg">Total</td>
                <td className="text-right px-6 py-4">{total.toFixed(2)}</td>
                <td className="rounded-br-lg"></td>
              </tr>
            </tbody>
          </table>
        )}

        
        <section className="mt-6 bg-black bg-opacity-70 backdrop-blur-md rounded-lg p-6 shadow-lg max-h-48 overflow-y-auto">
          <h3 className="text-2xl font-semibold mb-4 text-white text-center">Histórico de Gastos</h3>
          {historico.length === 0 ? (
            <p className="text-center text-white text-lg">Nenhum gasto no histórico.</p>
          ) : (
            <ul className="list-disc list-inside text-white">
              {historico.map((gasto, idx) => (
                <li key={gasto.id + '-' + idx} className="mb-2 truncate">
                  <span className="font-semibold">{gasto.descricao}</span>: R$ {gasto.valor.toFixed(2)}
                </li>
              ))}
            </ul>
          )}
        </section>
      </section>
    </div>
  );
}
