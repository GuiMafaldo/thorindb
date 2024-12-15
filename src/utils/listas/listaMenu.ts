
const menuData = [
  {
    title: "Dashboard",
    actions: ["Atualizações", "Estoque", "Vendas", "Compras"],
    links: ["/dashboard", "/estoque", "/vendas", "/compras"]
  },  
  {
      title: "Colaboradores",
      actions: ["Área de Colaboradores"],
      links: ["/colaborador"],
      
    },
    {
      title: "Clientes",
      actions: ["Área de Clientes"],
      links: ["/cliente"],
      
    },
    {
      title: "Fornecedores",
      actions: ["Área de Fornecedores"],
      links: ["/fornecedor"]
      
    },
    {
      title: "Produtos",
      actions: ["Área de Produtos"],
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