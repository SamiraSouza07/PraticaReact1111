import styles from "./FormularioProduto.module.css";
import ListaEstoque from "../ListaEstoque/ListaEstoque";

function FormularioProduto(props) {
  let nome = "";
  let estoque = 0;
  let vlrCompra = 0;
  let vlrVender = 0;

  return (
    <>
      <div className={styles.formulario}>
        <h1>Gerenciador de estoque</h1>
        <h2>Caixa: R${props.vlrCaixa}</h2>
        <label className={styles.label} htmlFor="nome">
          Nome do Produto:
        </label>
        <input
          className={styles.input}
          type="text"
          id="nome"
          onChange={(e) => {
            nome = e.target.value;
          }}
        />
        <label className={styles.label} htmlFor="qnt">
          Quantidade em Estoque
        </label>
        <input
          className={styles.input}
          type="text"
          id="qnt"
          onChange={(e) => {
            estoque = e.target.value;
          }}
        />
        <label className={styles.label} htmlFor="vlrCompra">
          Valor de Compra
        </label>
        <input
          className={styles.input}
          type="text"
          id="vlrCompra"
          onChange={(e) => {
            vlrCompra = e.target.value;
          }}
        />
        <label className={styles.label} htmlFor="vlrVenda">
          Valor de Venda
        </label>
        <input
    
          className={styles.input}
          type="text"
          id="vlrVenda"
          onChange={(e) => {
            vlrVender = e.target.value;
          }}
        />

        <button
          className="botao"
          onClick={(e) => {
            props.cadastrarProduto(nome, estoque,parseFloat(vlrCompra), parseFloat(vlrVender));
          }}
        >
          Adicionar Produto
        </button>

        <div>
          <ListaEstoque  comprar={props.comprar} vender={props.vender} produtos={props.produtos}/>
        </div>
      </div>
    </>
  );
}
export default FormularioProduto;
