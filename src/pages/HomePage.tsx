import { Heading, Spacer, Stack, Text } from "@chakra-ui/react";

interface PageProps {}

const HomePage: React.FC<PageProps> = () => {
    let dateTime = new Date();
    const dateOptions = {
        weekday: "long" as const,
        year: "numeric" as const,
        month: "long" as const,
        day: "numeric" as const,
    };
    const timeOptions = {
        hour: "2-digit" as const,
        minute: "2-digit" as const,
    };
    if (dateTime.getHours() < 12) {
        var greeting = "Good Morning";
    } else if (dateTime.getHours() < 18) {
        var greeting = "Good Afternoon";
    } else {
        var greeting = "Good Evening";
    }

    return (
        <>
            <Stack direction={"row"}>
                <Heading
                    as="h1"
                    size="lg"
                >
                    {greeting} $USERNAME
                </Heading>
                <Spacer />
                <Stack
                    direction={"column"}
                    align={"flex-end"}
                >
                    <Text fontSize="sm">{dateTime.toLocaleDateString("en-GB", dateOptions)}</Text>
                    <Text fontSize="xl">{dateTime.toLocaleTimeString("en-GB", timeOptions)}</Text>
                </Stack>
            </Stack>
        </>
    );
};

export default HomePage;
