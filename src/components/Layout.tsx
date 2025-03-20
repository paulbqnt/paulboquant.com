import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "@tanstack/react-router";
import AppHeader from "./Header/AppHeader.tsx";
import AppFooter from "./Footer/AppFooter.tsx";

function Layout() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            padding="0"  // Change from "md" to "0"
            header={{ height: 60 }}
            styles={(theme) => ({
                main: {
                    backgroundColor: theme.colors.dark[0],
                    color: theme.colors.text[0],
                    minHeight: "100vh",
                },
            })}
        >
            <AppShell.Header>
                <AppHeader />
            </AppShell.Header>

            <AppShell.Main style={{ display: 'flex', flexDirection: 'column' }}>
                <Outlet />
            </AppShell.Main>

            <AppShell.Footer>
                <AppFooter />
            </AppShell.Footer>
        </AppShell>
    );
}

export default Layout;
