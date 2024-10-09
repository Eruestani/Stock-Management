import { Link as ReactRouterLink } from "react-router-dom";

import { Button, Center, Container, Heading, Link, Stack, Text } from "@chakra-ui/react";

interface PageProps {}

const Error404Page: React.FC<PageProps> = () => {
    return (
        <>
            <Center height="100vh">
                <Container
                    width={"max-content"}
                    padding={5}
                    borderRadius={"md"}
                >
                    <Stack align="center">
                        <Heading
                            as="h1"
                            size="4xl"
                        >
                            404
                        </Heading>
                        <Text>Page not found</Text>
                        <Link
                            as={ReactRouterLink}
                            to="/"
                        >
                            <Button colorScheme="blue">Go Back</Button>
                        </Link>
                    </Stack>
                </Container>
            </Center>
        </>
    );
};

export default Error404Page;
