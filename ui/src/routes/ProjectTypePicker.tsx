import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

export function ProjectTypePicker() {
  const navigate = useNavigate();

  const options = [{
    image: "/stack-svgrepo-com.svg",
    alt: "full-stack",
    title: "Full-stack application",
    description: "Create a full-stack application. This will generate both a backend server and a frontend application.",
    id: "full-stack"
  }, {
    image: "/api-svgrepo-com.svg",
    alt: "web api",
    title: "Web API",
    description: "Create a web API. This will generate a backend server.",
    id: "web-api"
  }, {
    image: "/web-interface-svgrepo-com.svg",
    alt: "frontend app",
    title: "Frontend application",
    description: "Create a frontend application. This will generate a web application in the framework of your choice.",
    id: "frontend-app"
  }]

  return (
    <>
      <Typography variant="h3">Develop with Docker</Typography>
      <Typography sx={{ mt: 8 }}>What kind of project are you developing?</Typography>
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
