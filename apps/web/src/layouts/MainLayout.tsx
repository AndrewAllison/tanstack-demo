import { AppShell, Container,Group, Title } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'

export function MainLayout() {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Container size="lg" h="100%">
          <Group h="100%" justify="space-between">
            <Link to="/">
              <Title order={3}>TanStack Demo</Title>
            </Link>
            <Group>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Container size="lg" py="xl">
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  )
} 