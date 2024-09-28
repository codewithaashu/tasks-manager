import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CalendarDays } from "lucide-react";

const StatsCard = ({ Icon, title, value, style }) => {
  return (
    <>
      <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-semibold text-muted-foreground">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <div className="text-2xl font-bold">{value}</div>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${style} `}
          >
            <Icon className="w-5 h-5" />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default StatsCard;
