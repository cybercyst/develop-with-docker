import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Typography from "@mui/material/Typography";

export function PageHeader() {
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={1}>
      <Stack justifyContent="center">
        <IconButton data-action="back" onClick={() => navigate(-1)}>
          <ArrowBackIosIcon />
        </IconButton>
      </Stack>
      <Stack>
        <Typography variant="h3">Develop with Docker</Typography>

        <Typography>Get up and running as soon as possible</Typography>
      </Stack>
    </Stack>
  );
}
