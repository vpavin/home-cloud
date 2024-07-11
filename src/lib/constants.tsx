import { Cylinder, Box, Server, Group } from "lucide-react";

export const navbarItems = [
    {icon: <Server />,  label: "Nodes", link: "/nodes", isAdmin: false},
    {icon: <Box />,  label: "Deployments", link: "/deployments", isAdmin: false},
    {icon: <Cylinder />,  label: "Buckets", link: "/buckets", isAdmin: false},
    {icon: <Group />,  label: "Namespaces", link: "/admin/namespaces", isAdmin: true},
]