import { link } from "fs"

const menuData = [
  {
    title: "DashBoard",
    actions: ["Novidades", "Estoque", "Vendas", "Compras"],
    links: ["/dashboard", "/estoque", "/vendas", "/compras"]
  },  
  {
      title: "Colaboradores",
      actions: ["Cadastrar colaborador", "Atualizar colaborador", "Deletar colaborador"],
      links: ["/cadastroColaborador", "/atualizarColaborador", "/deletarColaborador"],
      
    },
    {
      title: "Clientes",
      actions: ["Consultar clientes"],
      links: ["/cliente"],
      
    },
    {
      title: "Fornecedores",
      actions: ["Consultar fornecedores"],
      links: ["/fornecedor"]
      
    },
    {
      title: "Produtos",
      actions: ["Consultar produtos"],
      links: ["/produtos"]
    },
    {
      title: "Pedidos",
      actions: ["Consultar pedidos", "Consultar Status", "Consultar Envio"],
      links: ["/pedidos", "/statusPedido", "/envioPedido"]
    },
    {
      title: "Relatorios",
      actions: ["Relatorio de Vendas", "Relatorio Financeiro", "Relatorio de estoque", "Relatorio de clientes"],
      links: ["/relatorioVendas", "/relatorioFinanceiro", "/relatorioEstoque", "/relatorioClientes"]
    }
]
export default menuData