import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./pages/dashboard/home";
import Task from "./pages/task/Task";
import Team from "./pages/team/Team";
import Request from "./pages/request/Request";
import { SnackbarProvider } from "notistack";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ManagerRoute from "./routes/managerRoute";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/auth" element={<PublicRoute />}>
            <Route  path="/auth" element={<Register />} />
            <Route  path="/auth/login" element={<Login />} />
          </Route>

          <Route  path="/" element={<PrivateRoute />}>
            <Route  path="/" element={<Home />}></Route>
            <Route  path="/dashboard/task" element={<Task />}></Route>
            <Route  path="/dashboard/manager" element={<ManagerRoute />}>
              <Route  path="/dashboard/manager/team" element={<Team />}></Route>
              <Route  path="/dashboard/manager/request" element={<Request />}></Route>
            </Route>
          </Route>
        </Routes>
        <SnackbarProvider />
      </Router>
    </main>
  );
}

export default App;
