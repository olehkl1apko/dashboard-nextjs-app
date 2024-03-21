import { useState, ChangeEvent, FormEvent } from "react";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { profileFormFields } from "@/constants";

interface FormData {
  [key: string]: string | boolean;
}

const Profile = () => {
  const { data: session } = useSession();

  let firstName;
  let lastName;
  if (session) {
    const names = session.user?.name?.split(" ") || [];
    firstName = names[0] || undefined;
    lastName = names.length > 1 ? names[names.length - 1] : "";
  }

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: session?.user?.email || "",
    password: "",
    confirmPassword: "",
    receiveEmails: false,
  });

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "receiveEmails" ? checked : value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <h1>Profile</h1>
      <Box>
        <Typography variant={"h4"} sx={{ paddingBottom: 4 }}>
          Hey {session ? session?.user?.name : "User"}, welcome to your profile
          👋
        </Typography>
        <Paper sx={{ padding: "1rem 2rem" }}>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  sx={{
                    height: 100,
                    width: 100,
                    marginBottom: 2,
                  }}
                  src={session?.user?.image as string}
                />
              </Box>
              <form
                onSubmit={handleSubmit}
                style={{ maxWidth: 600, margin: "0 auto" }}
              >
                <Grid container spacing={3}>
                  {profileFormFields.map(({ name, type, label, required }) => {
                    if (type !== "checkbox") {
                      return (
                        <Grid item xs={12} sm={6} key={name}>
                          <TextField
                            required={required}
                            fullWidth
                            label={label}
                            name={name}
                            value={formData[name] as string}
                            onChange={handleFormChange}
                          />
                        </Grid>
                      );
                    } else {
                      return (
                        <Grid item xs={12} key={name}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                name={name}
                                checked={formData[name] as boolean}
                                onChange={handleFormChange}
                                color="primary"
                              />
                            }
                            label={label}
                          />
                        </Grid>
                      );
                    }
                  })}
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Save Changes
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default Profile;
