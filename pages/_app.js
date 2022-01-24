import Link from "next/link";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Container, Text } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Container m={2}>
          <Text fontSize={24}>
            <Link href="/" passHref>
              <a>HOME</a>
            </Link>
          </Text>
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
