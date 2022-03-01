import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  value: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);


  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(setTransactions(response.data.transactions)));
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transation => (
            <tr key={transation.id}>
              <td>{transation.title}</td>
              <td className={transation.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transation.amount)}
              </td>
              <td>{transation.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transation.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
