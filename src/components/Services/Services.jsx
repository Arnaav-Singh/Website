import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Image
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";
import pic1 from '../../assets/images/services/service1/pic1.jpg' 
import pic2 from '../../assets/images/services/service2/pic2.jpg' 
const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        {/* <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button> */}
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Our Services
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
        Our goal is Academic Excellence for our students. All our efforts 
        are directed towards it. 
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Personal Coach"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Dedicated coach to track and monitor progress, solve queries and take 100% responsibility of the subject."
            }
            href={"#"}
          />
          <Card
            heading={"Weekly Doubt Clearing Sessions"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "2 hours weekly doubt clearing solution. Focus on concepts, presentation, and planning for higher-level classes"
            }
            href={"#"}
          />
          <Card
            heading={"100% Refund Policy"}
            icon={<Image src={pic1} w={10} h={10}/>}
            // {<Icon as={FcDonate} w={10} h={10} />}
            description={
            "  If you don't like the classes, 100% refund policy on a prorated basis. No questions asked. Feedback is appreciated to help us improve. "
            }
            href={"#"}
          />
          <Card
            heading={"Specialized Modules"}
           
            icon={<Image src={pic2}/>}
            // {<Icon as={FcManager} w={10} h={10} />}
            description={
              " Modules are customized with difficulty levels, daily life examples, relevance in exams, relevance for higher classes, and conceptual strength. "
            }
            href={"#"}
          />
          {/* <Card
            heading={"Heading"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          /> */}
        </Flex>
      </Container>
    </Box>
  );
}
