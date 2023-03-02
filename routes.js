let routes = [
    { path: '/courses', element: < Courses /> },
    { path: '/course/:courseID', element: <MainCourse /> },

    {
        path: '/about/*', element: < About />, children: [
            { path: "setting", element: < p style={{ textAlign: 'center' }}> Setting</p > },
            { path: "dashboard", element: <p style={{ textAlign: 'center' }}>Dashboard</p> }
        ]
    },
    { path: '/login', element: <Login /> },
    { path: '/panel', element: <Panel /> },
    { path: '/dashboard', element: <Dashboard /> },
]

export default routes