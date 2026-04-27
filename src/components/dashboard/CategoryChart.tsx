"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { spendingByCategory } from "@/lib/dashboard-data";

const chartConfig = {
  total: {
    label: "Total",
    color: "var(--color-primary)",
  },
} satisfies ChartConfig;

export function CategoryChart() {
  return (
    <Card className="rounded-3xl border-muted bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg text-foreground">
          Gastos por categoria
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <BarChart data={spendingByCategory}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="categoria"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Bar
              dataKey="total"
              fill="var(--color-primary)"
              radius={[12, 12, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}