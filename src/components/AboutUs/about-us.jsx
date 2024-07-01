import React from 'react';
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
import pic7 from '../../assets/images/teacher3/pic7.jpg';
import pic6 from '../../assets/images/teacher2/pic6.png';
import pic5 from '../../assets/images/teacher1/pic5.jpg';

const Card = ({ heading, description, img }) => {
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
      </Stack>
    </Box>
  );
};

const AboutUs = () => {
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
            img={pic5}
            description={
              "Teaches classes from 6th to 9th and has experience of 9+ years"
            }
          />
          <Card
            heading={"Anurag Aggarwal"}
            img={pic6}
            description={
              "Teaches classes from 6th to 9th and has experience of 1+ year"
            }
          />
          <Card
            heading={"Vidith Aggarwal"}
            img={pic7}
            description={
              "Teaches classes from 10th to 12th and has experience of 8+ years"
            }
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutUs;
