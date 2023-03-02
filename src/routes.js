


let routes = [
    { path: '/', element: <Landing /> },

    { path: '/courses', element: <Courses /> },
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
    { path: '/register', element: <Register /> },
    { path: '/panel', element: <Panel /> },
    { path: '/dashboard', element: <Dashboard /> },
]

export default routes