import { Box, Grid } from "@mui/material";

import {
  DataRibbon,
  TransactionBottomRow,
  TransactionsPerDay,
} from "@/components/Dashboard";

const Dashboard = () => {
  return (
    <Box>
      <Grid container gap={4} marginTop={2}>
        <DataRibbon />
        <TransactionsPerDay />
      </Grid>
      <TransactionBottomRow />
    </Box>
  );
};
export default Dashboard;
