import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/kart-magik")({
  component: () => <Outlet />,
});
