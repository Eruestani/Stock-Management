import { Button, Icon, Stack, useColorMode } from "@chakra-ui/react";

import ConvertIcon from "../hooks/ConvertIcon";

interface ComponentProps {}

const DarkModeToggle: React.FC<ComponentProps> = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const darkModeIcon = colorMode === "dark" ? "FaMoon" : "FaSun";
    return (
        <>
            <Stack
                direction={"row"}
                alignItems={"center"}
                maxWidth={"max-content"}
            >
                <Button
                    onClick={toggleColorMode}
                    colorScheme="brandButton"
                    size={"xs"}
                >
                    <Icon as={ConvertIcon({ icon: darkModeIcon })} />
                </Button>
            </Stack>
        </>
    );
};

export default DarkModeToggle;
