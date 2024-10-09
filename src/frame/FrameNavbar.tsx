import { Link as ReactRouterLink } from "react-router-dom";

import { Container, Icon, Link as ChakraLink, Stack, StackDivider, Text } from "@chakra-ui/react";

import NavbarItems from "../data/NavbarItems.json";

import ConvertIcon from "../hooks/ConvertIcon";

interface FrameProps {}

const FrameNavbar: React.FC<FrameProps> = () => {
    const Navbar = NavbarItems.items;

    return (
        <>
            <Container
                maxWidth={"100%"}
                height={"100%"}
                padding={1}
                borderRight={"2px solid"}
                alignContent={"center"}
            >
                <Stack
                    direction={"column"}
                    spacing={5}
                >
                    {Navbar.map((item, index) => (
                        <ChakraLink
                            as={ReactRouterLink}
                            to={item.url}
                        >
                            <Stack
                                direction={"row"}
                                spacing={2}
                                key={index}
                                align={"center"}
                            >
                                <Icon
                                    key={index}
                                    as={ConvertIcon({ icon: item.icon })}
                                />
                                <Text key={index}>{item.title}</Text>
                            </Stack>
                        </ChakraLink>
                    ))}
                </Stack>
            </Container>
        </>
    );
};

export default FrameNavbar;
