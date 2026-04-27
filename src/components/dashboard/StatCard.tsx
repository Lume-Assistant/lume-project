import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatCardProps = {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  variant?: "default" | "success" | "warning";
};

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  variant = "default",
}: StatCardProps) {
  return (
    <Card className="rounded-3xl border-muted bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-text-muted">{title}</p>
            <p className="mt-3 text-2xl font-bold tracking-tight text-foreground">
              {value}
            </p>
            <p className="mt-2 text-xs text-text-muted">{description}</p>
          </div>

          <div
            className={cn(
              "flex size-11 shrink-0 items-center justify-center rounded-2xl",
              variant === "default" && "bg-primary/10 text-primary",
              variant === "success" && "bg-success/10 text-success",
              variant === "warning" && "bg-danger/10 text-danger"
            )}
          >
            <Icon className="size-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}