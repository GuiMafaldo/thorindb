import { useState } from "react";
import { emitirNotaFiscal } from "../../api/api";

interface ItemNotaFiscal {
    descricao: string;
    quantidade: number;
    valorUnitario: number;
}

const EmissaoNotaFiscal = () => {
    const [cliente, setCliente] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [itens, setItens] = useState<ItemNotaFiscal[] | any>([]);
    const [descricao, setDescricao] = useState<string>('');
    const [quantidade, setQuantidade] = useState<number>(1);
    const [valorUnitario, setValorUnitario] = useState<number>(0);
    const [valorTotal, setValorTotal] = useState<number | any>(0); // Novo estado para valor total
    const [notaFiscalEmitida, setNotaFiscalEmitida] = useState<any>(null);

    const handleNf = () => {
        if (descricao && quantidade > 0 && valorUnitario > 0) {
            const novoItem = { descricao, quantidade, valorUnitario };
            setItens([...itens, novoItem]);
            setDescricao('');
            setQuantidade(1);
            setValorUnitario(0);
            calcularValorTotal([...itens, novoItem]); // Atualiza o valor total
        } else {
            alert('Por favor, preencha todos os campos do item.');
        }
    };

    const calcularValorTotal = (itens: ItemNotaFiscal[]) => {
        const total = itens.reduce((acc, item) => acc + (item.quantidade * item.valorUnitario), 0);
        setValorTotal(total); // Atualiza o estado do valor total
    };

    const handleEmitirNotaFiscal = async () => {
        try {
            const result = await emitirNotaFiscal(cliente, endereco, itens, valorTotal); // Passa o quarto parâmetro
            setNotaFiscalEmitida(result);
        } catch (error) {
            console.error('Erro ao emitir nota fiscal:', error);
            alert('Erro ao emitir nota fiscal. Confira os dados e tente novamente.');
        }
    };

    return (
        <div>
            <h1>Emitir Nota Fiscal</h1>
            <input
                type="text"
                placeholder="Cliente"
                value={cliente}
                onChange={(e) => setCliente(e.target.value)}
            />
            <input
                type="text"
                placeholder="Endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
            />
            <h3>Itens</h3>
            <input
                type="text"
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />
            <input
                type="number"
                placeholder="Quantidade"
                value={quantidade}
                onChange={(e) => setQuantidade(parseInt(e.target.value))}
            />
            <input
                type="number"
                placeholder="Preço Unitário"
                value={valorUnitario}
                onChange={(e) => setValorUnitario(parseFloat(e.target.value))}
            />
            <button onClick={handleNf}>Adicionar Item</button>

            <button onClick={handleEmitirNotaFiscal}>Emitir Nota Fiscal</button>

            {notaFiscalEmitida && (
                <div>
                    <h2>Nota Fiscal Emitida</h2>
                    <p>Número: {notaFiscalEmitida.numero}</p>
                    <p>Cliente: {notaFiscalEmitida.cliente}</p>
                    <p>Valor Total: {notaFiscalEmitida.valor_total}</p>
                </div>
            )}
        </div>
    );
}

export default EmissaoNotaFiscal;
