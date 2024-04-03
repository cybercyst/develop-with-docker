import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, OutlinedInput, Stack, Typography } from "@mui/material";
import { PageHeader } from "../shared/PageHeader";

const LargeCheckbox = (
  <Checkbox defaultChecked sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
);

export function ProjectDetailsForm() {
  function generateProject(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    alert("Hi!");
  }

  return (
    <>
      <PageHeader />
      <Box component="form" sx={{ mt: 8 }} noValidate autoComplete="off">
        <Typography sx={{ mt: 4 }}>
          Please provide some basic details
        </Typography>
        <FormGroup sx={{ mt: 1 }}>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Project Name</InputLabel>
            <OutlinedInput
              id="component-outlined"
              defaultValue=""
              label="Project Name"
            />
          </FormControl>
        </FormGroup>

        <Typography sx={{ mt: 4 }}>
          Select Docker products to include
        </Typography>
        <FormGroup>
          <FormControlLabel control={LargeCheckbox} label="Docker Scout" />
          <FormControlLabel
            control={LargeCheckbox}
            label="Docker Build Cloud"
          />
          <FormControlLabel
            control={LargeCheckbox}
            label="Docker Testcontainers"
          />
        </FormGroup>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button variant="contained" type="submit" onClick={generateProject}>Generate project</Button>
          {/*  NOTE(forrest): this reset button's navigation changes styles */}
          {/* <Button href="/">Reset</Button> */}
        </Stack>
      </Box>
    </>
  );
}
