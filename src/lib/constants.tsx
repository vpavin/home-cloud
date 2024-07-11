import { Cylinder, Box, Server, Group } from "lucide-react";

export const navbarItems = [
    {icon: <Server />,  label: "Nodes", link: "/nodes"},
    {icon: <Box />,  label: "Deployments", link: "/deployments"},
    {icon: <Cylinder />,  label: "Buckets", link: "/buckets"}
]

export const adminItems = [
    {icon: <Group />,  label: "Namespaces", link: "/namespaces"},
]