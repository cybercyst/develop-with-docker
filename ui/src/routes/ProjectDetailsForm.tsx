import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { PageHeader } from "../shared/PageHeader";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloudIcon from "@mui/icons-material/Cloud";

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

  const navigate = useNavigate();

  return (
    <>
      <PageHeader />
      <Box component="form" sx={{ mt: 8 }} noValidate autoComplete="off">
        <Typography variant="subtitle1">
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
        <Stack direction="row">
          <TestcontainersBenefitsCard />
          <DockerBuildScoutCard />
          <DockerBuildCloudCard />
        </Stack>

        <Stack direction="row" justifyContent="center" alignItems="center">
          <Button variant="contained" type="submit" onClick={generateProject}>
            Generate project
          </Button>
          <Button onClick={() => navigate("/")}>Reset</Button>
        </Stack>
      </Box>
    </>
  );
}

function TestcontainersBenefitsCard() {
  const benefits = [
    "Isolated testing environments.",
    "Wide tool support.",
    "Consistent testing.",
    "Faster development.",
    "Reliable JUnit integration.",
  ];

  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          Testcontainers
        </Typography>
        <List sx={{ pl: 1 }}>
          {benefits.map((benefit, index) => (
            <ListItem key={index} disableGutters>
              <ListItemIcon>
                <CheckCircleIcon
                  sx={{ color: (t) => t.palette.docker.green[600] }}
                />
              </ListItemIcon>
              <ListItemText primary={benefit} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

function DockerBuildScoutCard() {
  const benefits = [
    "Efficient image builds.",
    "Streamlined workflow.",
    "Optimized performance.",
    "Enhanced security features.",
    "Easy integration.",
  ];

  return (
    <Card
      sx={{
        m: 2,
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", color: (t) => t.palette.docker.blue[500] }}
        >
          Docker Scout
        </Typography>
        <List sx={{ pl: 1 }}>
          {benefits.map((benefit, index) => (
            <ListItem key={index} disableGutters>
              <ListItemIcon>
                <CheckCircleIcon
                  sx={{ color: (t) => t.palette.docker.blue[500] }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{ color: (t) => t.palette.text.secondary }}
                primary={benefit}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

function DockerBuildCloudCard() {
  const benefits = [
    "Faster builds.",
    "Shared cache across your team.",
    "Multi arch support.",
    "Seamless CI/CD integration.",
  ];

  return (
    <Card
      sx={{
        m: 2,
        borderRadius: "14px !important",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", color: (t) => t.palette.docker.blue[500] }}
        >
          Docker Build Cloud
        </Typography>
        <List sx={{ pl: 1 }}>
          {benefits.map((benefit, index) => (
            <ListItem key={index} disableGutters>
              <ListItemIcon>
                <CloudIcon sx={{ color: (t) => t.palette.docker.blue[500] }} />
              </ListItemIcon>
              <ListItemText primary={benefit} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
