import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

export function BackendPicker() {
  const navigate = useNavigate();

  const options = [{
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    alt: "nestjs",
    title: "NestJS",
    description: "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
    id: "nestjs"
  }, {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    alt: "fast api",
    title: "Fast API",
    description: "Create a web API. This will generate a backend server.",
    id: "fastapi"
  }, {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    alt: "asp net",
    title: "ASP.NET",
    description: "ASP.NET is an open source web framework, created by Microsoft, for building modern web apps and services with .NET.",
    id: "asp-net"
  }, {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
    alt: "go",
    title: "Go",
    description: "Build simple, secure, scalable systems with Go",
    id: "go"
  }]

  return (
    <>
      <Typography variant="h3">Develop with Docker</Typography>
      <Typography sx={{ mt: 8 }}>What language would you like to use for the backend?</Typography>
      <Stack direction="row" alignItems="start" spacing={2} sx={{ mt: 2 }}>
        {
          options.map((option) => {
            return (
              <Card sx={{ height: 300, width: 250 }} key={option.id}>
                <CardActionArea onClick={() =>
                  navigate(`/backend-picker`)
                }>
                  <CardMedia
                    component="img"
                    height="140"
                    image={option.image}
                    alt={option.alt}
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
            )
          })
        }
      </Stack>
    </>
  );
}
