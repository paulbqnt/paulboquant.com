import {AppShell, Burger} from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from "@tanstack/react-router";
import AppHeader from "./Header/AppHeader.tsx";
import AppFooter from "./Footer/AppFooter.tsx";

function Layout() {
    const [opened, { toggle }] = useDisclosure();;
    return (
        <AppShell
            padding="md"
            header={{ height: 60 }}
            navbar={{ width: 250, breakpoint: "sm", collapsed: { mobile: true } }}
            styles={(theme) => ({
                main: {
                    height: "100vh", // Ensure full height
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                },
            })}
        >
            <AppShell.Header>
                <AppHeader />
            </AppShell.Header>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>

            <AppShell.Footer>
                <AppFooter />
            </AppShell.Footer>
        </AppShell>
    );
}

export default Layout;
