import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "../shared/PageHeader";

export function FrontendPicker() {
  const navigate = useNavigate();

  const options = [
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      alt: "react",
      title: "React",
      description: "The library for web and native user interfaces",
      id: "react",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
      alt: "angular",
      title: "Angular",
      description: "The web development framework for building the future",
      id: "angular",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      alt: "vue.js",
      title: "Vue.js",
      description:
        "An approachable, performant and versatile framework for building web user interfaces.",
      id: "vue-js",
    },
  ];

  return (
    <>
      <PageHeader />
      <Typography sx={{ mt: 8 }}>
        Select the language or framework you'd like to use for the{" "}
        <b>frontend</b>
      </Typography>
      <Stack direction="row" alignItems="start" spacing={2} sx={{ mt: 2 }}>
        {options.map((option) => {
          return (
            <Card sx={{ height: 300, width: 250 }} key={option.id}>
              <CardActionArea onClick={() => navigate(`/project-details`)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={option.image}
                  alt={option.alt}
                  sx={{ objectFit: "contain", p: 1 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {option.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {option.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Stack>
    </>
  );
}
