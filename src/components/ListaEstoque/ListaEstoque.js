import ItemEstoque from "../ItemEstoque/ItemEstoque";
import styles from "./ListaEstoque.module.css"

function ListaEstoque(props){
    function produtos() {
        if (props.produtos.length > 0) {
          return (
            <>
              <div className={styles.lista}>
                {props.produtos.map((produto) => (
                  <ItemEstoque
                    key={produto.id}
                    produto={produto}
                    comprar={props.comprar}
                    vender={props.vender}
                  />
                ))}
              </div>
            </>
          );
        } else {
          
        }
      }
      return <>{produtos()}</>;
}
export default ListaEstoque