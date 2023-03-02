

import CoursesPage from './component/CoursesPage';
import MainCourse from './component/MainCourse';

import News from './component/News';
import MainNews from './component/MainNews';

import About from './component/About';
import Articles from './component/Articles';
import MainArticle from './component/MainArticle';
import Dashboard from './component/Dashboard';
import SignIn from './component/SignIn';
import Login from './component/Login';
import Setting from './component/Setting';
import Landing from './component/landing/Landing';


let routes = [
    { path: '/', element: <Landing/> },

    { path: '/coursesPage', element: <CoursesPage /> },
    { path: '/course/:courseID', element: <MainCourse /> },

    { path: '/news', element: <News /> },
    { path: '/news/:newsID', element: <MainNews /> },

    { path: '/articles', element: <Articles /> }, 
    { path: '/article/:articleID', element: <MainArticle /> },
    

    {
        path: '/about/*', element: <About />, children: [
            { path: "setting", element: <Setting/> },
            { path: "dashboard", element: <Dashboard/> }
        ]
    },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <SignIn /> },

]

export default routes