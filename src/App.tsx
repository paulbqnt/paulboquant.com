import React from 'react';
import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import 'katex/dist/katex.min.css';
import Layout from './components/layouts/Layout.tsx';
import BlogPost from "./components/blog/BlogPost";
import BlogList from "./components/blog/BlogList";
import "../src/styles/global.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Uses from "./pages/Uses";
import Projects from "./pages/Projects";
import Project1 from "./pages/projects/Project1";
import Project2 from "./pages/projects/Project2";
import Contact from "./pages/Contact.tsx";
import Learn from "./pages/Learn.tsx";
import Snippets from "./pages/Snippets.tsx";

// Root route uses Layout component
const rootRoute = createRootRoute({
    component: Layout,
});

// Define child routes
const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Home,
});

const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/about",
    component: About,
});

const usesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/uses",
    component: Uses,
});

const learnRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/learn",
    component: Learn,
});

const snippetsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/snippets",
    component: Snippets,
});

const contactRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/contact",
    component: Contact,
});


const projectsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/projects",
    component: Projects,
});

const project1Route = createRoute({
    getParentRoute: () => rootRoute,
    path: "/projects/project1",
    component: Project1, // You'll need to create this component
});

const project2Route = createRoute({
    getParentRoute: () => rootRoute,
    path: "/projects/project2",
    component: Project2, // You'll need to create this component
});



// Add blog list route
const blogListRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/blog",
    component: BlogList,
});

const blogPostRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/blog/$id", // Use $id for TanStack Router dynamic segment
    component: BlogPost,
});

// Create router with all routes
const router = createRouter({
    routeTree: rootRoute.addChildren([
        homeRoute,
        aboutRoute,
        blogListRoute,
        blogPostRoute,
        projectsRoute,
        usesRoute,
        project1Route,
        project2Route,
        contactRoute,
        learnRoute,
        snippetsRoute
    ]),
    defaultPreload: "intent",
    notFoundComponent: () => <div>Custom Not Found Component</div>,
});

console.log("Router configured with routes:", router.routeTree.children.map(route => route.path));

// Provide router in App
function App() {
    return <RouterProvider router={router} />;
}

export default App;