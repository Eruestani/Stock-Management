import { ReactNode } from "react";

import { Container } from "@chakra-ui/react";

interface FrameProps {
    children: ReactNode;
}

const FrameMain: React.FC<FrameProps> = (propContent) => {
    return (
        <>
            <Container
                maxWidth={"100%"}
                height={"100%"}
            >
                <Container
                    maxWidth={"80%"}
                    padding={2}
                    paddingY={10}
                >
                    {propContent.children}
                </Container>
            </Container>
        </>
    );
};

export default FrameMain;
