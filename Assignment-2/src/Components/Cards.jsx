import { Box, Image, Tag, Text } from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { GoPrimitiveDot } from "react-icons/go";
import web1 from "../Assests/web1.jpg";
import web2 from "../Assests/web2.jpg";
import web3 from "../Assests/web3.jpeg";
import web4 from "../Assests/web4.jpg";
import web5 from "../Assests/web5.avif";
import web6 from "../Assests/web6.jpg";
import web7 from "../Assests/web7.jpg";
import "../Styles/Card.css";

const Cards = () => {
  return (
    <Box className="Grid_Container">
      <Box className="ContainerBox" _hover={{ cursor: "pointer" }}>
        <Box className="FirstBox">
          <Box className="tag_box">
            <Tag className="tag1" size={"sm"} backgroundColor="rgba(128, 128, 128, 0.473)">
              <GoPrimitiveDot color="green" />
              <Text fontSize="70%" color="white">
                DRAFT
              </Text>
            </Tag>
          </Box>
          <Image
            marginTop="-32px"
            height="100%"
            width="100%"
            src={web1}
            alt="img1"
          />
        </Box>

        <Box textAlign="left" padding="5%" color="gray.600">
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "80%" }}>
              XYZ
            </Text>
          </Box>
          <Box>
            <Text className="text1">Last updated: 4/08/22</Text>
          </Box>
          <Box display="flex" justifyContent="left">
            <Box className="textBox">
              <HiOutlineDocumentText className="Icons" />
              <Text className="text1"> Lessons: 1</Text>
            </Box>
            <Box className="textBox">
              <AiOutlineClockCircle className="Icons" />
              <Text className="text1"> Minutes: 13</Text>
            </Box>
          </Box>
          <Box>
            <Tag
              borderRadius="5px"
              backgroundColor="rgba(128, 128, 128, 0.267)"
              fontSize="60%"
              size={"sm"}
              fontWeight="500"
              padding="1% 3% 2% 3%"
            >
              Marketing
            </Tag>
          </Box>
        </Box>
      </Box>

      <Box className="ContainerBox" _hover={{ cursor: "pointer" }}>
        <Box className="FirstBox">
          <Box className="tag_box">
            <Tag className="tag1" size={"sm"} backgroundColor="rgba(128, 128, 128, 0.473)">
              <GoPrimitiveDot color="gray" />
              <Text fontSize="70%" color="white">
                ARCHIVED
              </Text>
            </Tag>
          </Box>
          <Image
            marginTop="-32px"
            height="100%"
            width="100%"
            src={web2}
            alt="img1"
          />
        </Box>
        <Box textAlign="left" padding="5%" color="gray.600">
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "80%" }}>
              Sales vs Marketing
            </Text>
          </Box>
          <Box>
            <Text className="text1">Last updated: 4/08/22</Text>
          </Box>
          <Box display="flex" justifyContent="left">
            <Box className="textBox">
              <HiOutlineDocumentText className="Icons" />
              <Text className="text1"> Lessons: 1</Text>
            </Box>
            <Box className="textBox">
              <AiOutlineClockCircle className="Icons" />
              <Text className="text1"> Minutes: 13</Text>
            </Box>
          </Box>
          <Box>
            <Tag
              borderRadius="5px"
              backgroundColor="rgba(128, 128, 128, 0.267)"
              fontSize="60%"
              size={"sm"}
              fontWeight="500"
              padding="1% 3% 2% 3%"
              marginRight="2%"
            >
              Sales
            </Tag>
            <Tag
              borderRadius="5px"
              backgroundColor="rgba(128, 128, 128, 0.267)"
              fontSize="60%"
              size={"sm"}
              fontWeight="500"
              padding="1% 3% 2% 3%"
            >
              Marketing
            </Tag>
          </Box>
        </Box>
      </Box>

      <Box className="ContainerBox" _hover={{ cursor: "pointer" }}>
        <Box className="FirstBox">
          <Box className="tag_box">
            <Tag className="tag1" size={"sm"} backgroundColor="rgba(128, 128, 128, 0.473)">
              <GoPrimitiveDot color="red" />
              <Text fontSize="70%" color="white">
                LIVE
              </Text>
            </Tag>
          </Box>
          <Image
            marginTop="-32px"
            height="100%"
            width="100%"
            src={web7}
            alt="img7"
          />
        </Box>
        <Box textAlign="left" padding="5%" color="gray.600">
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "80%" }}>
              XYZ
            </Text>
          </Box>
          <Box>
            <Text className="text1">Last updated: 4/08/22</Text>
          </Box>
          <Box display="flex" justifyContent="left">
            <Box className="textBox">
              <HiOutlineDocumentText className="Icons" />
              <Text className="text1"> Lessons: 1</Text>
            </Box>
            <Box className="textBox">
              <AiOutlineClockCircle className="Icons" />
              <Text className="text1"> Minutes: 13</Text>
            </Box>
          </Box>
          <Box>
            <Tag
              borderRadius="5px"
              backgroundColor="rgba(128, 128, 128, 0.267)"
              fontSize="60%"
              size={"sm"}
              fontWeight="500"
              padding="1% 3% 2% 3%"
              marginRight="2%"
            >
              Sales
            </Tag>
          </Box>
        </Box>
      </Box>

      <Box className="ContainerBox" _hover={{ cursor: "pointer" }}>
        <Box className="FirstBox">
          <Box className="tag_box">
            <Tag className="tag1" size={"sm"} backgroundColor="rgba(128, 128, 128, 0.473)">
              <GoPrimitiveDot color="red" />
              <Text fontSize="70%" color="white">
                LIVE
              </Text>
            </Tag>
          </Box>
          <Image
            marginTop="-32px"
            height="100%"
            width="100%"
            src={web2}
            alt="img2"
          />
        </Box>
        <Box textAlign="left" padding="5%" color="gray.600">
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "80%" }}>
              How Google Analytics Ruined Marketing
            </Text>
          </Box>
          <Box>
            <Text className="text1">Last updated: 4/08/22</Text>
          </Box>
          <Box display="flex" justifyContent="left">
            <Box className="textBox">
              <HiOutlineDocumentText className="Icons" />
              <Text className="text1"> Lessons: 1</Text>
            </Box>
            <Box className="textBox">
              <AiOutlineClockCircle className="Icons" />
              <Text className="text1"> Minutes: 13</Text>
            </Box>
          </Box>
          <Box>
            <Tag
              borderRadius="5px"
              backgroundColor="rgba(128, 128, 128, 0.267)"
              fontSize="60%"
              size={"sm"}
              fontWeight="500"
              padding="1% 3% 2% 3%"
              marginRight="2%"
            >
              Sales
            </Tag>
          </Box>
        </Box>
      </Box>

      <Box className="ContainerBox" _hover={{ cursor: "pointer" }}>
        <Box className="FirstBox">
          <Box className="tag_box">
            <Tag className="tag1" size={"sm"} backgroundColor="rgba(128, 128, 128, 0.473)">
              <GoPrimitiveDot color="green" />
              <Text fontSize="70%" color="white">
                DRAFT
              </Text>
            </Tag>
          </Box>
          <Image
            marginTop="-32px"
            height="100%"
            width="100%"
            src={web3}
            alt="img3"
          />
        </Box>
        <Box textAlign="left" padding="5%" color="gray.600">
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "80%" }}>
              How to Unclog a sink
            </Text>
          </Box>
          <Box>
            <Text className="text1">Last updated: 4/08/22</Text>
          </Box>
          <Box display="flex" justifyContent="left">
            <Box className="textBox">
              <HiOutlineDocumentText className="Icons" />
              <Text className="text1"> Lessons: 1</Text>
            </Box>
            <Box className="textBox">
              <AiOutlineClockCircle className="Icons" />
              <Text className="text1"> Minutes: 13</Text>
            </Box>
          </Box>
          <Box>
            <Tag
              borderRadius="5px"
              backgroundColor="rgba(128, 128, 128, 0.267)"
              fontSize="60%"
              size={"sm"}
              fontWeight="500"
              padding="1% 3% 2% 3%"
              marginRight="2%"
            >
              Sales
            </Tag>
            <Tag
              borderRadius="5px"
              backgroundColor="rgba(128, 128, 128, 0.267)"
              fontSize="60%"
              size={"sm"}
              fontWeight="500"
              padding="1% 3% 2% 3%"
            >
              Marketing
            </Tag>
          </Box>
        </Box>
      </Box>

      <Box className="ContainerBox" _hover={{ cursor: "pointer" }}>
        <Box className="FirstBox">
          <Box className="tag_box">
            <Tag className="tag1" size={"sm"} backgroundColor="rgba(128, 128, 128, 0.473)">
              <GoPrimitiveDot color="red" />
              <Text fontSize="70%" color="white">
                LIVE
              </Text>
            </Tag>
          </Box>
          <Image
            marginTop="-32px"
            height="100%"
            width="100%"
            src={web4}
            alt="img4"
          />
        </Box>
        <Box textAlign="left" padding="5%" color="gray.600">
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "80%" }}>
              Compilance Training
            </Text>
          </Box>
          <Box>
            <Text className="text1">Last updated: 4/08/22</Text>
          </Box>
          <Box display="flex" justifyContent="left">
            <Box className="textBox">
              <HiOutlineDocumentText className="Icons" />
              <Text className="text1"> Lessons: 1</Text>
            </Box>
            <Box className="textBox">
              <AiOutlineClockCircle className="Icons" />
              <Text className="text1"> Minutes: 13</Text>
            </Box>
          </Box>
          <Box>
            <Tag
              borderRadius="5px"
              backgroundColor="rgba(128, 128, 128, 0.267)"
              fontSize="60%"
              size={"sm"}
              fontWeight="500"
              padding="1% 3% 2% 3%"
              marginRight="2%"
            >
              Sales
            </Tag>
            <Tag
              borderRadius="5px"
              backgroundColor="rgba(128, 128, 128, 0.267)"
              fontSize="60%"
              size={"sm"}
              fontWeight="500"
              padding="1% 3% 2% 3%"
            >
              Marketing
            </Tag>
          </Box>
        </Box>
      </Box>

      <Box className="ContainerBox" _hover={{ cursor: "pointer" }}>
        <Box className="FirstBox">
          <Box className="tag_box">
            <Tag className="tag1" size={"sm"} backgroundColor="rgba(128, 128, 128, 0.473)">
              <GoPrimitiveDot color="red" />
              <Text fontSize="70%" color="white">
                LIVE
              </Text>
            </Tag>
          </Box>
          <Image
            marginTop="-32px"
            height="100%"
            width="100%"
            src={web5}
            alt="img5"
          />
        </Box>
        <Box textAlign="left" padding="5%" color="gray.600">
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "80%" }}>
              Top Tips to Bargaining
            </Text>
          </Box>
          <Box>
            <Text className="text1">Last updated: 4/08/22</Text>
          </Box>
          <Box display="flex" justifyContent="left">
            <Box className="textBox">
              <HiOutlineDocumentText className="Icons" />
              <Text className="text1"> Lessons: 1</Text>
            </Box>
            <Box className="textBox">
              <AiOutlineClockCircle className="Icons" />
              <Text className="text1"> Minutes: 13</Text>
            </Box>
          </Box>
          <Box>
            <Tag
              borderRadius="5px"
              backgroundColor="rgba(128, 128, 128, 0.267)"
              fontSize="60%"
              size={"sm"}
              fontWeight="500"
              padding="1% 3% 2% 3%"
            >
              Marketing
            </Tag>
          </Box>
        </Box>
      </Box>

      <Box className="ContainerBox" _hover={{ cursor: "pointer" }}>
        <Box className="FirstBox">
          <Box className="tag_box">
            <Tag className="tag1" size={"sm"} backgroundColor="rgba(128, 128, 128, 0.473)">
              <GoPrimitiveDot color="red" />
              <Text fontSize="70%" color="white">
                LIVE
              </Text>
            </Tag>
          </Box>
          <Image
            marginTop="-32px"
            height="100%"
            width="100%"
            src={web6}
            alt="img6"
          />
        </Box>
        <Box textAlign="left" padding="5%" color="gray.600">
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "80%" }}>
              Social Media Marketing
            </Text>
          </Box>
          <Box>
            <Text className="text1">Last updated: 4/08/22</Text>
          </Box>
          <Box display="flex" justifyContent="left">
            <Box className="textBox">
              <HiOutlineDocumentText className="Icons" />
              <Text className="text1"> Lessons: 1</Text>
            </Box>
            <Box className="textBox">
              <AiOutlineClockCircle className="Icons" />
              <Text className="text1"> Minutes: 13</Text>
            </Box>
          </Box>
          <Box>
            <Tag
              borderRadius="5px"
              backgroundColor="rgba(128, 128, 128, 0.267)"
              fontSize="60%"
              size={"sm"}
              fontWeight="500"
              padding="1% 3% 2% 3%"
            >
              Marketing
            </Tag>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Cards };
