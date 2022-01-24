import Link from "next/link";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Container, Text } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Container m={2}>
          <Text fontSize={24} fontWeight="bold">
            <Link href="/" passHref>
              <a>React Hooks</a>
            </Link>
          </Text>
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
