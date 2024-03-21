import { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from "@mui/material";

const Settings = () => {
  const [dashboardFeatures, setDashboardFeatures] = useState({
    showRevenue: true,
    showProfit: true,
    showOrders: true,
    showCustomers: true,
  });

  const handleFeatureChange =
    (feature: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setDashboardFeatures({
        ...dashboardFeatures,
        [feature]: event.target.checked,
      });
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(dashboardFeatures);
  };

  return (
    <>
      <h1>Settings</h1>
      <Box>
        <Typography variant="h4" gutterBottom>
          Dashboard Features
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormGroup>
                  {Object.entries(dashboardFeatures).map(([key, value]) => (
                    <FormControlLabel
                      key={key}
                      control={
                        <Switch
                          checked={value}
                          onChange={handleFeatureChange(key)}
                        />
                      }
                      label={key.charAt(0).toUpperCase() + key.slice(1)}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Settings
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default Settings;
