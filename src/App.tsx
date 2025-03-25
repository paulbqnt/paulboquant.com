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
import Hiram from "./pages/projects/Hiram.tsx";
import HiramPricing from "./pages/projects/HiramPricing.tsx";
import Contact from "./pages/Contact.tsx";
import Learn from "./pages/Learn.tsx";
import Snippets from "./pages/Snippets.tsx";
import GoodBooks from "./pages/GoodBooks.tsx";
import Now from "./pages/Now.tsx";

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

const goodBooksRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/good-books",
    component: GoodBooks,
});

const nowRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/now",
    component: Now,
});

const projectsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/projects",
    component: Projects,
});

const hiramRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/projects/hiram",
    component: Hiram, // You'll need to create this component
});

const hiramPricingRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/projects/hiram-pricing",
    component: HiramPricing, // You'll need to create this component
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
        hiramRoute,
        hiramPricingRoute,
        contactRoute,
        learnRoute,
        snippetsRoute,
        goodBooksRoute,
        nowRoute
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