import { Card, Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/system";

import scss from "./TransactionsPerDay.module.scss";
import DataChart from "@/components/DataChart";
import { lineChartData, mockTransactionCard } from "@/constants";

export const TransactionsPerDay = () => {
  const theme = useTheme();

  return (
    <Grid container gap={2} className={scss.wrapper}>
      <Paper className={scss.transactions}>
        <div className={scss.chart}>
          <Typography>TransActions per day</Typography>
          <DataChart type={"line"} data={lineChartData} />
        </div>
        <div className={scss.cardWrapper}>
          {mockTransactionCard.map(({ title, value, changeValue }) => (
            <Card key={title} className={scss.card} variant={"outlined"}>
              <div className={scss.cardTitle}>
                <Typography>{title}</Typography>
              </div>
              <div className={scss.cardValue}>
                <Typography>{value}</Typography>
                <Typography color={theme.palette.success.main} fontSize={14}>
                  {changeValue}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </Paper>
    </Grid>
  );
};
