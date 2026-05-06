"use client";

import {
  ArrowDownLeft,
  ArrowUpRight,
  Pencil,
  Plus,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  formatCurrency,
  formatDate,
  transactions,
} from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";

type TransactionType = "receita" | "despesa";

type UiTransaction = {
  id: string | number;
  descricao: string;
  valor: number;
  tipo: TransactionType;
  categoria: string;
  created_at: string;
};

const getTodayDate = () => new Date().toISOString().split("T")[0];

export default function TransactionsPage() {
  const items = transactions as UiTransaction[];

  return (
    <div className="space-y-6 animate-[fadeIn_0.45s_ease-out]">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">Registros</p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Transações
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-text-muted">
            Todas as movimentações interpretadas a partir das mensagens enviadas
            no WhatsApp.
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto">
              <Plus className="mr-2 size-4" />
              Nova transação
            </Button>
          </DialogTrigger>

          <DialogContent className="border border-muted bg-white sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Nova transação</DialogTitle>
            </DialogHeader>

            <form className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="descricao">Descrição</Label>
                <Input
                  id="descricao"
                  placeholder="Ex: Mercado, salário, gasolina..."
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="valor">Valor</Label>
                  <Input
                    id="valor"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="0,00"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Tipo</Label>
                  <Select defaultValue="despesa">
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>

                    <SelectContent className="bg-white">
                      <SelectItem value="despesa">Despesa</SelectItem>
                      <SelectItem value="receita">Receita</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="categoria">Categoria</Label>
                  <Input id="categoria" placeholder="Ex: Alimentação" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="created_at">Data</Label>
                  <Input
                    id="created_at"
                    type="date"
                    defaultValue={getTodayDate()}
                  />
                </div>
              </div>

              <DialogFooter>
                <Button type="button" variant="secondary">
                  Cancelar
                </Button>

                <Button type="button">Adicionar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </section>

      <section className="overflow-hidden rounded-3xl border border-muted bg-white shadow-sm">
        <div className="hidden border-b border-muted px-5 py-4 text-xs font-semibold uppercase tracking-wide text-text-muted md:grid md:grid-cols-12">
          <div className="col-span-5">Descrição</div>
          <div className="col-span-2">Categoria</div>
          <div className="col-span-2">Data</div>
          <div className="col-span-2 text-right">Valor</div>
          <div className="col-span-1 text-right">Ações</div>
        </div>

        <div className="divide-y divide-muted">
          {items.map((transaction) => {
            const isIncome = transaction.tipo === "receita";

            return (
              <div
                key={transaction.id}
                className="flex flex-col gap-4 px-4 py-4 transition hover:bg-muted/50 sm:px-5 md:grid md:grid-cols-12 md:items-center md:gap-0"
              >
                <div className="flex min-w-0 items-center gap-3 md:col-span-5">
                  <div
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-2xl",
                      isIncome
                        ? "bg-success/10 text-success"
                        : "bg-danger/10 text-danger"
                    )}
                  >
                    {isIncome ? (
                      <ArrowUpRight className="size-4" />
                    ) : (
                      <ArrowDownLeft className="size-4" />
                    )}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">
                      {transaction.descricao}
                    </p>

                    <p className="mt-1 text-xs text-text-muted md:hidden">
                      {transaction.categoria} ·{" "}
                      {formatDate(transaction.created_at)}
                    </p>
                  </div>
                </div>

                <div className="hidden text-sm text-text-muted md:col-span-2 md:block">
                  {transaction.categoria}
                </div>

                <div className="hidden text-sm text-text-muted md:col-span-2 md:block">
                  {formatDate(transaction.created_at)}
                </div>

                <div
                  className={cn(
                    "text-sm font-bold md:col-span-2 md:text-right",
                    isIncome ? "text-success" : "text-foreground"
                  )}
                >
                  {isIncome ? "+" : "-"}
                  {formatCurrency(transaction.valor)}
                </div>

                <div className="flex justify-end gap-2 md:col-span-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-8"
                      >
                        <Pencil className="size-4" />
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="border border-muted bg-white sm:max-w-lg">
                      <DialogHeader>
                        <DialogTitle>Editar transação</DialogTitle>
                      </DialogHeader>

                      <form className="space-y-5">
                        <div className="space-y-2">
                          <Label htmlFor={`descricao-${transaction.id}`}>
                            Descrição
                          </Label>
                          <Input
                            id={`descricao-${transaction.id}`}
                            defaultValue={transaction.descricao}
                          />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor={`valor-${transaction.id}`}>
                              Valor
                            </Label>
                            <Input
                              id={`valor-${transaction.id}`}
                              type="number"
                              step="0.01"
                              min="0"
                              defaultValue={transaction.valor}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Tipo</Label>
                            <Select defaultValue={transaction.tipo}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>

                              <SelectContent className="bg-white">
                                <SelectItem value="despesa">
                                  Despesa
                                </SelectItem>
                                <SelectItem value="receita">
                                  Receita
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor={`categoria-${transaction.id}`}>
                              Categoria
                            </Label>
                            <Input
                              id={`categoria-${transaction.id}`}
                              defaultValue={transaction.categoria}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor={`created_at-${transaction.id}`}>
                              Data
                            </Label>
                            <Input
                              id={`created_at-${transaction.id}`}
                              type="date"
                              defaultValue={transaction.created_at.split("T")[0]}
                            />
                          </div>
                        </div>

                        <DialogFooter>
                          <Button type="button" variant="secondary">
                            Cancelar
                          </Button>

                          <Button type="button">Salvar alterações</Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="size-8 text-danger hover:text-danger"
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}