import { Container, Stack } from "@chakra-ui/react";

interface FrameProps {}

const FrameFooter: React.FC<FrameProps> = () => {
    return (
        <>
            <Container
                maxWidth={"100%"}
                height={"100%"}
                borderTop={"2px solid"}
            >
                <Container
                    maxWidth={"60%"}
                    padding={2}
                    paddingTop={5}
                >
                    <Stack spacing={5}></Stack>
                </Container>
            </Container>
        </>
    );
};

export default FrameFooter;
