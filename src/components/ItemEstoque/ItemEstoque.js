import styles from "./ItemEstoque.module.css"

function ItemEstoque(props){
    return(
        <>
        <div className={styles.produtoItem}>
            <p className={styles.nomeProduto}>{props.produto.nome} </p>
            <p className={styles.quantidadeProduto}>{props.produto.estoque}</p>
            <p>{props.produto.vlrVenda}</p>
            <div className={styles.botoesAcoes}>
                <button className={styles.comprar} onClick={(e)=>{
                    props.comprar(props.produto.id)
                }}>+</button>
                <button className={styles.vender} onClick={(e)=>{
                    props.vender(props.produto.id)
                }}>-</button>
            </div>
        </div>
        </>
    )
}
export default ItemEstoque