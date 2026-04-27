export type TransactionType = "despesa" | "receita";

export type Transaction = {
  id: string;
  user_id: string;
  valor: number;
  tipo: TransactionType;
  descricao: string;
  categoria:
    | "Alimentação"
    | "Transporte"
    | "Moradia"
    | "Lazer"
    | "Educação"
    | "Saúde"
    | "Pets"
    | "Compras"
    | "Utilidades"
    | "Outros";
  confianca: number;
  corrigido: boolean;
  precisa_confirmacao: boolean;
  campo_duvida: string;
  created_at: string;
};

export const transactions: Transaction[] = [
  {
    id: "1",
    user_id: "user_001",
    valor: 2400,
    tipo: "receita",
    descricao: "Salário",
    categoria: "Outros",
    confianca: 0.94,
    corrigido: false,
    precisa_confirmacao: false,
    campo_duvida: "",
    created_at: "2026-04-05T09:00:00.000Z",
  },
  {
    id: "2",
    user_id: "user_001",
    valor: 50,
    tipo: "despesa",
    descricao: "Pizza",
    categoria: "Alimentação",
    confianca: 0.96,
    corrigido: false,
    precisa_confirmacao: false,
    campo_duvida: "",
    created_at: "2026-04-08T20:30:00.000Z",
  },
  {
    id: "3",
    user_id: "user_001",
    valor: 34.5,
    tipo: "despesa",
    descricao: "Uber",
    categoria: "Transporte",
    confianca: 0.95,
    corrigido: false,
    precisa_confirmacao: false,
    campo_duvida: "",
    created_at: "2026-04-12T21:10:00.000Z",
  },
  {
    id: "4",
    user_id: "user_001",
    valor: 120,
    tipo: "despesa",
    descricao: "Mercado",
    categoria: "Alimentação",
    confianca: 0.92,
    corrigido: false,
    precisa_confirmacao: false,
    campo_duvida: "",
    created_at: "2026-04-13T17:20:00.000Z",
  },
  {
    id: "5",
    user_id: "user_001",
    valor: 700,
    tipo: "receita",
    descricao: "Freela",
    categoria: "Outros",
    confianca: 0.9,
    corrigido: false,
    precisa_confirmacao: false,
    campo_duvida: "",
    created_at: "2026-04-14T14:00:00.000Z",
  },
  {
    id: "6",
    user_id: "user_001",
    valor: 89.9,
    tipo: "despesa",
    descricao: "Livro",
    categoria: "Educação",
    confianca: 0.82,
    corrigido: false,
    precisa_confirmacao: false,
    campo_duvida: "",
    created_at: "2026-04-16T11:40:00.000Z",
  },
  {
    id: "7",
    user_id: "user_001",
    valor: 100,
    tipo: "despesa",
    descricao: "Pix João",
    categoria: "Outros",
    confianca: 0.55,
    corrigido: false,
    precisa_confirmacao: true,
    campo_duvida: "tipo",
    created_at: "2026-04-18T19:10:00.000Z",
  },
];

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(date));
};

export const totalIncome = transactions
  .filter((transaction) => transaction.tipo === "receita")
  .reduce((acc, transaction) => acc + transaction.valor, 0);

export const totalExpenses = transactions
  .filter((transaction) => transaction.tipo === "despesa")
  .reduce((acc, transaction) => acc + transaction.valor, 0);

export const balance = totalIncome - totalExpenses;

export const pendingConfirmations = transactions.filter(
  (transaction) => transaction.precisa_confirmacao
).length;

export const averageConfidence =
  transactions.reduce((acc, transaction) => acc + transaction.confianca, 0) /
  transactions.length;

export const correctedTransactions = transactions.filter(
  (transaction) => transaction.corrigido
).length;

export const spendingByDay = [
  { day: "05/04", receitas: 2400, despesas: 0 },
  { day: "08/04", receitas: 0, despesas: 50 },
  { day: "12/04", receitas: 0, despesas: 34.5 },
  { day: "13/04", receitas: 0, despesas: 120 },
  { day: "14/04", receitas: 700, despesas: 0 },
  { day: "16/04", receitas: 0, despesas: 89.9 },
  { day: "18/04", receitas: 0, despesas: 100 },
];

export const spendingByCategory = [
  { categoria: "Alimentação", total: 170 },
  { categoria: "Transporte", total: 34.5 },
  { categoria: "Educação", total: 89.9 },
  { categoria: "Outros", total: 100 },
];

export const subscription = {
  plan: "Premium",
  status: "Ativo",
  price: 19.9,
  nextCharge: "2026-05-05",
  messagesUsed: 87,
  messagesLimit: "Ilimitado",
};