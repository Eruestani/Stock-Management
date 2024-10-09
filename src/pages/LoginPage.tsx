import { Link as ReactRouterLink } from "react-router-dom";

import useSignIn from "react-auth-kit/hooks/useSignIn";

import { Button, Center, Container, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

interface PageProps {}

const LoginPage: React.FC<PageProps> = () => {
    const signIn = useSignIn();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        axios.post("/api/login", formData).then((res) => {
            if (res.status === 200) {
                if (
                    signIn({
                        auth: {
                            token: res.data.token,
                            type: "Bearer",
                        },
                        refresh: res.data.refreshToken,
                        userState: res.data.authUserState,
                    })
                ) {
                    // Only if you are using refreshToken feature
                    // Redirect or do-something
                } else {
                    //Throw error
                }
            }
        });
    };
    return (
        <>
            <Center height="100vh">
                <Container
                    width={"max-content"}
                    padding={5}
                    borderRadius={"md"}
                    backgroundColor={"gray.100"}
                >
                    <form onSubmit={onSubmit}>
                        <Stack>
                            <Text>Email Address</Text>
                            <input
                                type={"email"}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                            <Text>Password</Text>
                            <input
                                type={"password"}
                                onChange={(e) =>
                                    setFormData({ ...formData, password: e.target.value })
                                }
                            />

                            <button>Submit</button>
                        </Stack>
                    </form>
                </Container>
            </Center>
        </>
    );
};

export default LoginPage;
