import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";
import pic1 from '../../assets/images/courses/course1/pic1.jpg' 
import pic2 from '../../assets/images/courses/course2/pic2.jpg' 
import pic3 from '../../assets/images/courses/course3/pic3.jpg' 

const Card = ({ heading, description, img, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "400px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      bg="white"
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={360}
          h={48}
          align={"center"}
          justify={"center"}
          color={"white"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
         <Image w={360} h={48} src= {img} />
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  return (
    <Box p={4} >
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Our Courses
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
         Unlock your potential with our diverse course offerings.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"CBSE 12 Maths Course"}
            // icon={<Icon as={FcAssistant} w={10} h={10} />}
            img={pic1}
            description={
              "Free"
            }
            href={"#"}
          />
          <Card
            heading={"CBSE 11 Maths Course"}
            // icon={<Icon as={FcCollaboration} w={10} h={10} />}
            img={pic2}
            description={
              "Rs.99"
            }
            href={"#"}
          />
          <Card
            heading={"CBSE 10 Maths Course"}
            img={pic3}
            // icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "Rs.99"
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
