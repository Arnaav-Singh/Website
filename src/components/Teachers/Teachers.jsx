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
import pic7 from '../../assets/images/teacher3/pic7.jpg' 
import pic6 from '../../assets/images/teacher2/pic6.png' 
import pic5 from '../../assets/images/teacher1/pic5.jpg' 

const Card = ({ heading, description, img, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "300px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={64}
          h={64}
          align={"center"}
          justify={"center"}
          color={"white"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          <Image src={img}/>
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
          Our Teachers
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
        Experienced educators shaping minds for success.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Kirti Aggarwal"}
            // icon={<Icon as={FcAssistant} w={10} h={10} />}
            img={pic5}
            description={
              "Teaches classes from 6th to 9th and has experience of 9+ years"
            }
            href={"#"}
          />
          <Card
            heading={"Anurag Aggarwal"}
            // icon={<Icon as={FcCollaboration} w={10} h={10} />}
            img={pic6}
            description={
              "Teaches classes from 6th to 9th and has experience of 1+ year"
            }
            href={"#"}
          />
          <Card
            heading={"Vidith Aggarwal"}
            // icon={<Icon as={FcDonate} w={10} h={10} />}
            img={pic7}
            description={
              "Teaches classes from 10th to 12th and has experience of 8+ years"
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
