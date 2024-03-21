import { Grid } from "@mui/material";

import { DataCard } from "@/components/Dashboard";
import scss from "./DataRibbon.module.scss";
import { mockDataRibbon } from "@/constants";

export const DataRibbon = () => {
  return (
    <Grid container gap={2} className={scss.dataRibbon}>
      {mockDataRibbon.map(({ title, value, description }) => (
        <Grid item key={title}>
          <DataCard title={title} value={value} description={description} />
        </Grid>
      ))}
    </Grid>
  );
};
