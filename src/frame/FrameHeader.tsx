import { Container, Spacer, Stack } from "@chakra-ui/react";

import DarkModeToggle from "../components/DarkModeToggle";

interface FrameProps {}

const FrameHeader: React.FC<FrameProps> = () => {
    return (
        <>
            <Container
                maxWidth={"100%"}
                padding={1}
                borderBottom={"2px solid"}
            >
                <Container maxW={"80%"}>
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justify={{ base: "center", lg: "flex-start" }}
                    >
                        <Spacer />
                        <DarkModeToggle />
                    </Stack>
                </Container>
            </Container>
        </>
    );
};

export default FrameHeader;
