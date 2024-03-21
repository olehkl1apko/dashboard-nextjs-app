import { Grid, Paper } from "@mui/material";

import DataChart from "@/components/DataChart";
import scss from "./TransactionsBottomRow.module.scss";
import { doughnutChartData } from "@/constants";

export const TransactionBottomRow = () => {
  return (
    <Grid container className={scss.bottomRow}>
      {[1, 2, 3, 4].map((_, idx) => (
        <Grid key={idx}>
          <Paper className={scss.dataCard}>
            <p>Transactions per user type</p>
            <DataChart type={"doughnut"} data={doughnutChartData} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
