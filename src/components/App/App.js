import { useState } from "react";
import FormularioProduto from "../FormularioProduto/FormularioProduto";
import styles from "./App.module.css";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [vlrCaixa, setVlrCaixa] = useState(1000);

  const cadastrarProduto = (nome, estoque, vlrCompra, vlrVenda) => {
    const produto = {
      id: Date.now(),
      nome: nome,
      estoque: estoque,
      vlrCompra: vlrCompra,
      vlrVenda: vlrVenda,
    };
    setProdutos([...produtos, produto]);
  };
  const vender = (id) => {
    setProdutos(
      produtos.map((produto) =>
        produto.id === id
          ? {
              ...produtos,
              nome: produto.nome,
              estoque: parseInt(produto.estoque) - 1,
              vlrCompra: produto.vlrCompra,
              vlrVenda: produto.vlrVenda,
            }
          : produto
      )
    );
    produtos.map((produto) => {
      if (produto.id === id) {
        setVlrCaixa(vlrCaixa + parseFloat(produto.vlrVenda));
      }
    });
  };

  const comprar = (id) => {
    setProdutos(
      produtos.map((produto) =>
        produto.id === id
          ? {
              ...produtos,
              nome: produto.nome,
              estoque: parseInt(produto.estoque) + 1,
              vlrCompra: produto.vlrCompra,
              vlrVenda: produto.vlrVenda,
            }
          : produto
      )
    );
    produtos.map((produto) => {
      if (produto.id === id) {
        if (vlrCaixa >= produto.vlrCompra)
          setVlrCaixa(vlrCaixa - parseFloat(produto.vlrCompra));
      } else {
        prompt.alert("Sem saldo suficiente em caixa");
      }
    });
  };

  return (
    <>
      <FormularioProduto
        vlrCaixa={vlrCaixa}
        produtos={produtos}
        cadastrarProduto={cadastrarProduto}
        comprar={comprar}
        vender={vender}
      />
    </>
  );
}

export default App;
