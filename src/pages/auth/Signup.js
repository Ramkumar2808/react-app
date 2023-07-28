import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MuiLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";
import { FileUpload } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const defaultTheme = createTheme();

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Signup() {
  const [avatarImage, setAvatarImage] = React.useState("");

  const handleAvatarChange = (event) => {
    // Get the selected file
    const file = event.target.files[0];
    // Create a FileReader to read the file
    const reader = new FileReader();
    reader.onloadend = () => {
      // Set the selected image as the Avatar source
      setAvatarImage(reader.result);
    };
    if (file) {
      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (values) => {
    console.log(values);
    // Add your login logic here...
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Signup
          </Typography>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              rememberMe: false,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form noValidate>
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="off"
                  autoFocus
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && <ErrorMessage name="name" />}
                />
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && <ErrorMessage name="email" />}
                />
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="off"
                  error={touched.password && Boolean(errors.password)}
                  helperText={
                    touched.password && <ErrorMessage name="password" />
                  }
                />

                {/* <Button variant="contained" component="label"> */}
                {/* <FileUpload /> */}
                <input
                  accept="image/*"
                  // className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={handleAvatarChange}
                />

                <label htmlFor="contained-button-file">
                  <IconButton>
                    <Avatar
                      src={avatarImage}
                      style={{
                        margin: "10px",
                        width: "60px",
                        height: "60px",
                      }}
                    />
                  </IconButton>
                </label>
                {/* </Button> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isSubmitting}
                  size="large"
                >
                  Signup
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <MuiLink component={RouterLink} to="/login" variant="body2">
                      Back to Login
                    </MuiLink>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
