import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  FormControl,
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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloudIcon from "@mui/icons-material/Cloud";
import ScoutLogo from "../assets/favicon-32x32.png";
import DBCLogo from "../assets/dbc-32x32.png";
import TestContainersLogo from "../assets/test-containers-32x32.png";
import { FormEvent, useState } from "react";
import { createDockerDesktopClient } from "@docker/extension-api-client";
import slugify from "slugify";

// NOTE: You may want to modify this to where you'll have things
const WORKSPACE_DIR = "/home/cybercyst/workspace/hackathon"

export function ProjectDetailsForm() {
  const client = createDockerDesktopClient();

  const [projectName, setProjectName] = useState("");

  async function generateProject(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    const result = await client.extension.host?.cli.exec("go-scaffold", [
      `${WORKSPACE_DIR}/full-stack-template`,
      "--input", JSON.stringify({}),
      "--output-directory", `${WORKSPACE_DIR}/generated/${slugify(projectName)}`
    ]);
    console.log(result?.stdout);
  }

  const navigate = useNavigate();

  return (
    <>
      <PageHeader />
      <Box component="form" sx={{ mt: 8 }} noValidate autoComplete="off" onSubmit={generateProject}>
        <Typography variant="h3" fontSize="1.3rem">
          You're almost done!
        </Typography>
        <FormGroup sx={{ mt: 1 }}>
          <Typography variant="body2">
            Let's give this awesome project a name
          </Typography>
          <FormControl>
            <InputLabel htmlFor="projectName">Name</InputLabel>
            <OutlinedInput
              id="projectName"
              name="projectName"
              defaultValue=""
              label="Project Name"
              onChange={(e) => setProjectName(e.currentTarget.value)}
            />
          </FormControl>
        </FormGroup>

        <Typography variant="h3" fontSize="1.3rem" mt={2}>
          Choose additional docker features
        </Typography>
        <ProductCardList />

        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <Button variant="contained" type="submit">
            Generate project
          </Button>
          <Button variant="text" onClick={() => navigate("/")}>Reset</Button>
        </Stack>
      </Box>
    </>
  );
}

function ProductCardList() {
  const [selectedItems, setSelectedItems] = useState<string[]>([
    "TC",
    "S",
    "DBC",
  ]);

  const toggleSelection = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <Stack direction="row" width="100%" justifyContent="center">
      <TestcontainersCard
        onClick={() => toggleSelection("TC")}
        isSelected={selectedItems.includes("TC")}
      />
      <DockerScoutCard
        onClick={() => toggleSelection("S")}
        isSelected={selectedItems.includes("S")}
      />
      <DockerBuildCloudCard
        onClick={() => toggleSelection("DBC")}
        isSelected={selectedItems.includes("DBC")}
      />
    </Stack>
  );
}

function TestcontainersCard({
  onClick,
  isSelected,
}: {
  onClick: () => void;
  isSelected: boolean;
}) {
  const benefits = [
    "Isolated testing environments.",
    "Wide tool support.",
    "Consistent testing.",
    "Faster development.",
  ];

  return (
    <Card
      sx={{
        m: 2,
        borderRadius: "14px !important",
        width: 300,
        ...(isSelected && {
          border: (t) => `2px solid ${t.palette.docker.green[600]}`,
          bgcolor: (t) => t.palette.docker.green[100],
        }),
      }}
    >
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Stack direction="row" alignItems="center" spacing={2} mb={2}>
            <img src={TestContainersLogo} />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              m={0}
              sx={{ fontWeight: "bold" }}
            >
              Testcontainers
            </Typography>
          </Stack>
          <List>
            {benefits.map((benefit, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "#13b9b3" }} />
                </ListItemIcon>
                <ListItemText
                  primary={benefit}
                  sx={{ color: (t) => t.palette.text.secondary }}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function DockerScoutCard({
  onClick,
  isSelected,
}: {
  onClick: () => void;
  isSelected: boolean;
}) {
  const benefits = [
    "Efficient image builds.",
    "Optimized performance.",
    "Enhanced security features.",
    "Easy integration.",
  ];

  return (
    <Card
      sx={{
        m: 2,
        borderRadius: "14px !important",
        width: 300,
        ...(isSelected && {
          border: (t) => `2px solid ${t.palette.docker.green[600]}`,
          bgcolor: (t) => t.palette.docker.green[100],
        }),
      }}
    >
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Stack direction="row" alignItems="center" spacing={2} mb={2}>
            <img src={ScoutLogo} />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              m={0}
              sx={{ fontWeight: "bold" }}
            >
              Docker Scout
            </Typography>
          </Stack>
          <List>
            {benefits.map((benefit, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon>
                  <CheckCircleIcon
                    sx={{ color: (t) => t.palette.docker.green[600] }}
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
      </CardActionArea>
    </Card>
  );
}

function DockerBuildCloudCard({
  onClick,
  isSelected,
}: {
  onClick: () => void;
  isSelected: boolean;
}) {
  const benefits = [
    "Faster builds.",
    "Team shared cache.",
    "Multi arch support.",
    "CI/CD integration.",
  ];

  return (
    <Card
      sx={{
        m: 2,
        borderRadius: "14px !important",
        width: 300,
        ...(isSelected && {
          border: (t) => `2px solid ${t.palette.docker.green[600]}`,
          bgcolor: (t) => t.palette.docker.green[100],
        }),
      }}
    >
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Stack direction="row" alignItems="center" spacing={2} mb={2}>
            <img src={DBCLogo} />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              m={0}
              sx={{ fontWeight: "bold" }}
            >
              Build Cloud
            </Typography>
          </Stack>
          <List>
            {benefits.map((benefit, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon>
                  <CloudIcon
                    sx={{ color: (t) => t.palette.docker.blue[500] }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={benefit}
                  sx={{ color: (t) => t.palette.text.secondary }}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
