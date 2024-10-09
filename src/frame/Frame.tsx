// React imports
import { ReactNode } from "react";

// Chakra UI imports
import { Grid, GridItem } from "@chakra-ui/react";

// Component imports
import FrameHeader from "./FrameHeader";
import FrameMain from "./FrameMain";
import FrameFooter from "./FrameFooter";
import FrameNavbar from "./FrameNavbar";

// Props for the website frame
interface FrameProps {
    children: ReactNode;
    hero: {
        title: string;
        subtitle: string;
        backgroundImage: string;
        button?: {
            text: string;
            link: string;
        };
    };
}

// WebsiteFrame component
// This component is used to display the website frame
const WebsiteFrame: React.FC<FrameProps> = (propContent) => {
    // All returns must be within a fragment
    // This is the frame of the website
    // It contains the header, main content, and footer
    // The main content is passed as a child to the component
    return (
        <>
            <Grid
                gridTemplateRows={"max-content 1fr max-content"}
                gridTemplateColumns={"max-content 1fr"}
                height="100vh"
                templateAreas={"'header header' 'nav main' 'footer footer'"}
            >
                <GridItem area={"header"}>
                    <FrameHeader />
                </GridItem>
                <GridItem area={"nav"}>
                    <FrameNavbar />
                </GridItem>
                <GridItem area={"main"}>
                    <FrameMain children={propContent.children} />
                </GridItem>
                <GridItem area={"footer"}>
                    <FrameFooter />
                </GridItem>
            </Grid>
        </>
    );
};

export default WebsiteFrame;
