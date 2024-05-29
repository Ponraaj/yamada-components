import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  FormControl,
  Heading,
  Icon,
  Input,
  Link,
  Spacer,
  Text,
  VStack,
} from "@yamada-ui/react"
import { ArrowLeft } from "lucide-react"
import type { FC } from "react"

const AuthenticationForm: FC = () => {
  return (
    <Container gap="lg">
      <VStack gap="xs">
        <Heading as="h1" size="lg" textAlign="center">
          Forgot your password?
        </Heading>
        <Text
          textAlign="center"
          fontSize="md"
          color={["blackAlpha.700", "whiteAlpha.700"]}
        >
          Enter your email to get a reset link
        </Text>
      </VStack>
      <Card
        rounded="xl"
        variant="outline"
        w="lg"
        maxW="full"
        mx="auto"
        bg={["white", "black"]}
        p="md"
      >
        <CardBody>
          <FormControl isRequired label="Email">
            <Input type="email" placeholder="me@yamada-ui.com" />
          </FormControl>
        </CardBody>

        <CardFooter
          _container={[{ maxW: "400px", css: { flexDir: "column" } }]}
        >
          <Link
            href="#"
            onClick={(e) => e.preventDefault()}
            fontSize="sm"
            color={["blackAlpha.700", "whiteAlpha.700"]}
            justifyContent="center"
            alignItems="center"
            display="flex"
            _hover={{ textDecoration: "none" }}
          >
            <Icon as={ArrowLeft} mr="xs" />
            Back to the login page
          </Link>
          <Spacer _container={[{ maxW: "400px", css: { display: "none" } }]} />
          <Button
            colorScheme="primary"
            _container={[{ maxW: "400px", css: { w: "full" } }]}
          >
            Reset password
          </Button>
        </CardFooter>
      </Card>
    </Container>
  )
}

export default AuthenticationForm
