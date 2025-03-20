import React from 'react';
import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import Layout from './components/Layout';
import Home from "./pages/Home";
import About from "./pages/About";
import BlogPost from "./components/blog/BlogPost";
import BlogList from "./components/blog/BlogList";
import Projects from "./pages/Projects.tsx";

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

const projectsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/projects",
    component: Projects,
});

// Add blog list route
const blogListRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/blog",
    component: BlogList,
});

const blogPostRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/post/$id", // Use $id for TanStack Router dynamic segment
    component: BlogPost,
});

// Create router with all routes
const router = createRouter({
    routeTree: rootRoute.addChildren([homeRoute, aboutRoute, blogListRoute, blogPostRoute, projectsRoute]),
    defaultPreload: "intent",
    notFoundComponent: () => <div>Custom Not Found Component</div>,
});

console.log("Router configured with routes:", router.routeTree.children.map(route => route.path));

// Provide router in App
function App() {
    return <RouterProvider router={router} />;
}

export default App;