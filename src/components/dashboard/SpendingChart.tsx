"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { spendingByDay } from "@/lib/dashboard-data";

const chartConfig = {
  receitas: {
    label: "Receitas",
    color: "var(--color-primary)",
  },
  despesas: {
    label: "Despesas",
    color: "var(--color-danger)",
  },
} satisfies ChartConfig;

export function SpendingChart() {
  return (
    <Card className="rounded-3xl border-muted bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg text-foreground">
          Fluxo do mês
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <AreaChart data={spendingByDay}>
            <defs>
              <linearGradient id="fillReceitas" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-primary)"
                  stopOpacity={0.35}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-primary)"
                  stopOpacity={0}
                />
              </linearGradient>

              <linearGradient id="fillDespesas" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-danger)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-danger)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Area
              dataKey="receitas"
              type="natural"
              fill="url(#fillReceitas)"
              stroke="var(--color-primary)"
              strokeWidth={2}
            />

            <Area
              dataKey="despesas"
              type="natural"
              fill="url(#fillDespesas)"
              stroke="var(--color-danger)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}