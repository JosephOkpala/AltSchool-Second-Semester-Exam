import { Routes, Route } from 'react-router-dom'
import ErrorBound from './components/ErrorBoundary';
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Profile from './components/Profile';
import Repositories from "./components/Repositories";

const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/repos' element={<Repositories/>}/>
            <Route path='/error' element={<ErrorBound/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    )
}

export default Router;
