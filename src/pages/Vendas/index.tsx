import { useState } from 'react'
import Layout from "../../Layout"

import { useProductsArea } from "../../utils/handleProducts"

import { TableHead, TableRow, TableHeader, TableData } from "../Consultas/Produtos/styles"
import { Produto } from '../../services/Interfaces/products'

const PaginaDeRegistroDeVendas = () => {
    const [openVendaComponent, setOpenVendaComponent] = useState<Boolean>(false)
    const [addToCart, setAddToCart] = useState(0)
    const [openCartModal, setOpenCartModal] = useState<Boolean>(false)


    const handleOpenCartModal = (e: React.MouseEvent) => {
        e.preventDefault()
        setOpenCartModal(!openCartModal)
    }

    const handleOpenVenda = (e: React.MouseEvent) => {
        e.preventDefault()
        setOpenVendaComponent(!openVendaComponent)
    }
   
    const addCartItem = (e: any) => {
        e.preventDefault()
        setAddToCart(prevCount => prevCount + 1)
    }
    const removeCartItem = (e: any) => {
        e.preventDefault()
        setAddToCart(prevCount => prevCount - 1)

        if(addToCart === 0) {
            setAddToCart(0)
        }
    }

    const {
        searchTerm,
        error,
        isLoading,
        filteredProducts,
        handleChangeProducts
    } = useProductsArea()

const addedProductInCart = (product: Produto) => {
    addCartItem(product)
}
    return( 
        <Layout>
            <section onClick={handleOpenCartModal} style={{display: 'flex', width: '1500px', gap: '10px', flexDirection:"column", alignItems: 'center', position: "relative"}}>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '960px', height: '90px', alignItems: 'center', marginLeft: "380px"}}>	
                    <h1 style={{fontFamily: 'Helvetica', fontSize: "1.7em", marginTop: "70px", marginBottom: "60px", marginLeft: "160px"}}>Registro de vendas</h1>
                    <p style={{display: 'flex', gap: '1px', justifyContent: 'center'}}>
                        <img onClick={handleOpenCartModal} src="/image/cart.png" alt="icone carrinho"  />({addToCart})
                        {openCartModal ? (
                        <div style={{position: "absolute", padding: "12px", top: "0", right: "-166px", height: "90vh", backgroundColor: "#d9d9d9", zIndex:1, width: "380px", display: "flex", flexDirection:"column"}}>
                                <h2 style={{fontFamily: "Helvetica", fontSize: "1.2em", marginBottom: "40px", textAlign: "center", marginTop: "20px"}}>Carrinho</h2>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <img style={{width: "120px", height: '120px'}} src="http://via.placeholder.com/150" alt="produto" />
                                <div style={{marginTop: "10px"}}>
                                    {searchTerm.length > 0 ? (
                                        ("")
                                    ): filteredProducts.map((item) => (
                                        <div>
                                            <p>{item.nome}</p>
                                            <p>{item.quantidade} {addToCart}</p>
                                            <p>{item.preco}</p> 
                                            <span>Total: R${item.preco * item.quantidade}</span>
                                        </div>
                                    ))}
                                </div>   
                                <div style={{marginTop:"60px"}}>
                                    <button onClick={addCartItem} style={{height: "30px", width: "30px", backgroundColor: "blue", border: "none", borderRadius: "5px", cursor: "pointer", marginLeft: "10px", color: "#fff", fontFamily: "Helvetica", textDecoration: "none"}}>+</button>
                                    <button onClick={removeCartItem} style={{height: "30px", width: "30px", backgroundColor: "blue", border: "none", borderRadius: "5px", cursor: "pointer", marginLeft: "10px", color: "#fff", fontFamily: "Helvetica", textDecoration: "none"}}>-</button>
                                </div>
                            </div>
                        </div>

                        ): ("")}
                    </p>
                </div>
                <nav style={{display: 'flex', justifyContent: 'space-between', padding: '10px', width: '1360px', height: '90px', position: "relative"}}>
                    <ul style={{display: 'flex', gap: '10px', justifyContent: 'space-between', width: "100%", listStyle: "none", padding: "12px", border: '1px solid #000', borderRadius: "5px"}}>
                        <li style={{backgroundColor: "#fff", padding: "12px",  borderRadius: "5px", height: "40px", color: "#000", fontFamily: "Helvetica", fontWeight:"bold", cursor: 'pointer'}} >Ultimas Vendas</li>
                        <li onClick={handleOpenVenda}
                            style={{
                                backgroundColor: "#fff", 
                                padding: "12px",  
                                borderRadius: "5px", 
                                height: "40px", 
                                color: "#000", 
                                fontFamily: "Helvetica", 
                                fontWeight:"bold", 
                                cursor: 'pointer',
                            }} >Realizar venda
                            {openVendaComponent ? (
                                <div style={{position: "absolute", top: "150px", left: "30px", height: "60vh", overflowX: "scroll", width:"96%"}}>
                                    {isLoading ? (
                                    <p>Carregando...</p>                            
                                    ): error ?(
                                        <p>{error}</p>
                                    ) : (
                                        <table style={{width: "1170px"}}>
                                            <TableHead>
                                                <TableRow>
                                                <TableHeader>ID</TableHeader>
                                                <TableHeader>Nome</TableHeader>
                                                <TableHeader>Preço</TableHeader>
                                                <TableHeader>Quantidade</TableHeader>
                                                <TableHeader>Descrição</TableHeader>
                                                <TableHeader>Categoria</TableHeader>
                                            </TableRow>
                                        </TableHead>
                                        <tbody style={{position: "relative"}}>
                                            {isLoading ? (
                                            <p>Carregando...</p>
                                        ): (
                                        <p>{error}</p>
                                        )}
                                        {searchTerm.length > 0 ? (
                                            filteredProducts.map((produto) => (
                                                    <TableRow key={produto.id}>
                                                        <TableData>{produto.id}</TableData>
                                                        <TableData>{produto.nome}</TableData>
                                                        <TableData>R$: {produto.preco.toFixed(2)}</TableData>
                                                        <TableData>{produto.quantidade}</TableData>
                                                        <TableData>{produto.descricao}</TableData>
                                                        <TableData>{produto.categoria}</TableData>
                                                           <button type='submit' onClick={addedProductInCart.bind(null, produto)}
                                                                    style={{
                                                                        position: "absolute", 
                                                                        padding: "8px", 
                                                                        backgroundColor: "blue", 
                                                                        border: "none", 
                                                                        borderRadius: "5px", 
                                                                        cursor: "pointer", 
                                                                        marginLeft: "10px", 
                                                                        color: "#fff", 
                                                                        fontFamily: "Helvetica", 
                                                                        textDecoration: "none"
                                                                    }}>
                                                                    Adicionar
                                                                </button>
                                                        
                                                    </TableRow>              
                                            ))
                                            ) : (
                                                <TableRow>
                                                    <TableData colSpan={9}>Nenhum produto encontrado</TableData>
                                                </TableRow>
                                            )}
                                        </tbody>
                                    </table>
                                    )}
                                </div>
                            ): ("")}
                            
                        </li>
                        <li style={{backgroundColor: "#fff", padding: "12px",  borderRadius: "5px", height: "40px", color: "#000", fontFamily: "Helvetica", fontWeight:"bold", cursor: 'pointer'}} >Pedidos de Venda</li>
                    </ul>
                </nav>
                    <div style={{display: 'flex', justifyContent: 'center', width: '1340px', height: '68vh', alignItems: 'center', border: "1px solid #000", borderRadius: "5px", textAlign:"center", position: "relative", overflowX: "hidden"}}>
                        <div style={{display: 'flex', gap: '1px', justifyContent: 'center', alignItems: "center", position: "absolute", top: "10px", right: "10px"}}>
                            <input 
                                style={{padding: "6px"}} 
                                type="text"
                                value={searchTerm}
                                onChange={handleChangeProducts}
                                placeholder="Digite o nome do produto" 
                            />
                            <button type="submit"><img style={{ height: "22px", width: "20px"}} src="/image/search.png" alt="icone de busca" /></button>
                        </div>   
                </div>
                {/* <button onClick={addCartItem}
                    style={{
                        position: "absolute", 
                        padding: "8px", 
                        backgroundColor: "blue", 
                        border: "none", 
                        borderRadius: "5px", 
                        cursor: "pointer", 
                        marginLeft: "10px", 
                        color: "#fff", 
                        fontFamily: "Helvetica", 
                        textDecoration: "none",
                        bottom: "10px",
                        right: "10px"
                    }}>
                    Adicionar
                </button> */}
            </section>
        </Layout>
    )
}

export default PaginaDeRegistroDeVendas