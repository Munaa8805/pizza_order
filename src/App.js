import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import Profile from "./pages/Profile";

function App() {
    return (
        <Layout>
            <Switch>
                {/* <Route exact path="/">
                    <Redirect to="/" />
                </Route> */}
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/menu">
                    <Menu />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <RegisterPage />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
