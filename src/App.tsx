import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import Login from "./pages/login/Login";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./pages/dashboard/home";
import Task from "./pages/task/Task";
import Team from "./pages/team/Team";
import Request from "./pages/request/Request";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/auth" element={<PublicRoute />}>
            <Route path="/auth/login" element={<Login />} />
          </Route>

          <Route path="/dashboard" element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Home />}></Route>
              <Route path="/dashboard/task" element={<Task />}></Route>
              <Route path="/dashboard/team" element={<Team />}></Route>
              <Route path="/dashboard/request" element={<Request />}></Route>
          </Route>
        </Routes>
        <SnackbarProvider />
      </Router>
    </main>
  );
}

export default App;
