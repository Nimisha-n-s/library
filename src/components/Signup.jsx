import {Button,Checkbox,FormControlLabel,FormGroup,TextField,Typography,} from "@mui/material";
  import { styled } from "@mui/material/styles";
  import Grid from "@mui/material/Grid";
  import Paper from "@mui/material/Paper";
  import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
  import { Link } from "react-router-dom";
  import Box from "@mui/material/Box";
  import Container from "@mui/material/Container";
  import Stack from "@mui/material/Stack";
  import bg from "./images/bg.jpg";
  import axios from "axios";
  import React, { useState } from "react";
  import InputAdornment from "@mui/material/InputAdornment";
  import IconButton from "@mui/material/IconButton";
  import Visibility from "@mui/icons-material/Visibility";
  import VisibilityOff from "@mui/icons-material/VisibilityOff";
  
  const Signup = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
  }));
  
  function RowAndColumnSpacing() {
	const [isChecked, setIsChecked] = useState(false);
	const [formData, setFormData] = useState({
	  username: "",
	  password: "",
	  firstName: "",
	  lastName: "",
	  place: "",
	  age: "",
	  email: "",
	  education: "",
	  contactDetails: "",
	  phone: "",
	});
  
	const handleCheckboxChange = (event) => {
	  setIsChecked(event.target.checked);
	};
  
	const handleInputChange = (event) => {
	  const { id, value } = event.target;
	  setFormData((prevData) => ({
		...prevData,
		[id]: value,
	  }));
	};
  
	const handleSubmit = (event) => {
	  event.preventDefault();
  
	  if (isChecked) {
		// Perform form submission logic here
		console.log("Form submitted:", formData);
  
		axios
		  .post("http://localhost:8080/createuser", formData)
		  .then((response) => {
			console.log(response.data);
			alert("Success");
		  })
		  .catch((error) => {
			console.error(error);
			alert("An error occurred");
		  });
	  } else {
		// Checkbox is not checked, do not proceed with form submission
		console.log("Checkbox is not checked");
	  }
	};
  
	return (
	  <div style={{ backgroundImage: `url(${bg})` }}>
		<br />
		<br />
		<br />
		<Container maxWidth="sm">
		  <Box
			sx={{
			  bgcolor: "rgba(255, 255, 255, 0.5)",
			  height: "90vh",
			  backdropFilter: "blur(10px)",
			  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
			}}
		  >
			<Stack direction="column" alignItems="center" spacing={2}>
			  <Grid>
				<Grid item xs={12}>
				  <Signup>
					<LocalLibraryRoundedIcon style={{ color: "#ff6b08" }} />
					<Typography variant="h5" style={{ color: "black" }}>
					  Signup to explore .
					</Typography>
				  </Signup>
				</Grid>
				<form onSubmit={handleSubmit}>
				  <Grid>
					<TextField
					  style={{ margin: 7 }}
					  required
					  id="firstName"
					  label="FirstName"
					  variant="filled"
					  value={formData.firstName}
					  onChange={handleInputChange}
					/>
					{/*<TextField
										  style={{ margin: 7 }}
										  required
										  id='lastName'
										  label='LastName'
										  variant='filled'
										  value={formData.lastName}
										  onChange={handleInputChange}
				  />*/}
				  </Grid>
				  <Grid>
					<TextField
					  style={{ margin: 7 }}
					  required
					  id="place"
					  label="Place"
					  variant="filled"
					  value={formData.place}
					  onChange={handleInputChange}
					/>
					<TextField
					  style={{ margin: 7 }}
					  required
					  id="age"
					  label="Age"
					  variant="filled"
					  value={formData.age}
					  onChange={handleInputChange}
					/>
				  </Grid>
				  <Grid>
					<TextField
					  style={{ margin: 7 }}
					  required
					  id="email"
					  label="E-mail"
					  variant="filled"
					  value={formData.email}
					  onChange={handleInputChange}
					/>
					<TextField
					  style={{ margin: 7, width: 220 }}
					  required
					  id="education"
					  label="Education"
					  variant="filled"
					  value={formData.education}
					  onChange={handleInputChange}
					></TextField>
				  </Grid>
				  <Grid>
					<TextField
					  style={{ margin: 7 }}
					  required
					  id="contactDetails"
					  label="Contact Details"
					  variant="filled"
					  value={formData.contactDetails}
					  onChange={handleInputChange}
					/>
					<TextField
					  style={{ margin: 7 }}
					  required
					  id="phone"
					  label="Phone"
					  variant="filled"
					  value={formData.phone}
					  onChange={handleInputChange}
					/>
				  </Grid>
				  <Grid>
					<TextField
					  style={{ margin: 7 }}
					  required
					  id="username"
					  label="Username"
					  variant="filled"
					  value={formData.username}
					  onChange={handleInputChange}
					/>
					<TextField
					  style={{ margin: 7, width: 220 }}
					  required
					  id="password"
					  label="Password"
					  variant="filled"
					  value={formData.password}
					  onChange={handleInputChange}
					  type={formData.showPassword ? "text" : "password"}
					  InputProps={{
						endAdornment: (
						  <InputAdornment position="end">
							<IconButton
							  onClick={() =>
								setFormData((prevData) => ({
								  ...prevData,
								  showPassword: !prevData.showPassword,
								}))
							  }
							>
							  {formData.showPassword ? (
								<Visibility />
							  ) : (
								<VisibilityOff />
							  )}
							</IconButton>
						  </InputAdornment>
						),
					  }}
					/>
				  </Grid>
				  <br />
				  <FormGroup>
					<FormControlLabel
					  control={
						<Checkbox
						  style={{ color: "black" }}
						  checked={isChecked}
						  onChange={handleCheckboxChange}
						/>
					  }
					  style={{ color: "black" }}
					  label="Terms and Conditions (if the book is not returned or damaged, a fine will be charged)"
					/>
				  </FormGroup>
				  <br />
				  <Grid item xs={12}>
					<Button
					  type="submit"
					  variant="contained"
					  size="large"
					  style={{
						backgroundColor: "#cf23cf",
						color: "#ffffff",
						marginBottom: "30px",
					  }}
					  disabled={!isChecked}
					>
					  <Link to={"/hp"}>Sign Up</Link>
					</Button>
					<Typography>
					  Have an account?
					  <Button variant="text">
						<Link to={"/l"}>Login</Link>
					  </Button>
					</Typography>
				  </Grid>
				</form>
			  </Grid>
			</Stack>
		  </Box>
		</Container>
	  </div>
	);
  }
  
  export default RowAndColumnSpacing;