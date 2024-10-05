export interface NotaFiscal {
    id: number;
    numero: string;
    dataEmissao: Date;
    cliente: string;
    endereco: string;
    itens: ItemNotaFiscal[];
    valorTotal: number;
    status: 'emitida' | 'cancelada';
}

export interface ItemNotaFiscal {
    descricao: string;
    quantidade: number;
    valorUnitario: number;
    valorTotal: number;
}