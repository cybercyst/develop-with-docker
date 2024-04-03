// import { createDockerDesktopClient } from '@docker/extension-api-client';
import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackendPicker } from './routes/BackendPicker';
import { FrontendPicker } from './routes/FrontendPicker';
import { ProjectDetailsForm } from './routes/ProjectDetailsForm';
import { ProjectTypePicker } from './routes/ProjectTypePicker';

// Note: This line relies on Docker Desktop's presence as a host application.
// If you're running this React app in a browser, it won't work properly.
// const client = createDockerDesktopClient();
//
// function useDockerDesktopClient() {
//   return client;
// }

export function App() {
  // const [response, setResponse] = React.useState<string>();
  // const ddClient = useDockerDesktopClient();
  //
  // const fetchAndDisplayResponse = async () => {
  //   const result = await ddClient.extension.vm?.service?.get('/hello');
  //   setResponse(JSON.stringify(result));
  // };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectTypePicker />}></Route>
        <Route path="C:/" element={<ProjectTypePicker />}></Route>

        <Route path="/backend-picker" element={<BackendPicker />}></Route>
        <Route path="C:/backend-picker" element={<BackendPicker />}></Route>

        <Route path="/frontend-picker" element={<FrontendPicker />}></Route>
        <Route path="C:/frontend-picker" element={<FrontendPicker />}></Route>

        <Route path="/project-details" element={<ProjectDetailsForm />}></Route>
        <Route path="C:/project-details" element={<ProjectDetailsForm />}></Route>
      </Routes>
    </BrowserRouter>
  );

  //     <Typography variant="h3">Develop with Docker</Typography>
  //     <Typography sx={{ mt: 8 }}>What kind of project are you developing?</Typography>
  //     <Stack direction="row" alignItems="start" spacing={2} sx={{ mt: 2 }}>
  //       {
  //         options.map((option) => {
  //           return (
  //             <Card sx={{ height: 300, width: 250 }} key={option.id}>
  //               <CardActionArea>
  //                 <CardMedia
  //                   component="img"
  //                   height="140"
  //                   image={option.image}
  //                   alt={option.alt}
  //                 />
  //                 <CardContent>
  //                   <Typography gutterBottom variant="h5" component="div">
  //                     {option.title}
  //                   </Typography>
  //                   <Typography variant="body2" color="text.secondary">
  //                     {option.description}
  //                   </Typography>
  //                 </CardContent>
  //               </CardActionArea>
  //             </Card>
  //           )
  //         })
  //       }
  //     </Stack>
  //   </>
  // );

  // return (
  //   <>
  //     <Typography variant="h3">Docker extension demo</Typography>
  //     <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
  //       This is a basic page rendered with MUI, using Docker's theme. Read the
  //       MUI documentation to learn more. Using MUI in a conventional way and
  //       avoiding custom styling will help make sure your extension continues to
  //       look great as Docker's theme evolves.
  //     </Typography>
  //     <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
  //       Pressing the below button will trigger a request to the backend. Its
  //       response will appear in the textarea.
  //     </Typography>
  //     <Stack direction="row" alignItems="start" spacing={2} sx={{ mt: 4 }}>
  //       <Button variant="contained" onClick={fetchAndDisplayResponse}>
  //         Call backend
  //       </Button>
  //
  //       <TextField
  //         label="Backend response"
  //         sx={{ width: 480 }}
  //         disabled
  //         multiline
  //         variant="outlined"
  //         minRows={5}
  //         value={response ?? ''}
  //       />
  //     </Stack>
  //   </>
  // );
}
