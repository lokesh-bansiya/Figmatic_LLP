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


const Cards = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ base: "repeat(1,1fr)", sm:"repeat(2,1fr)", md:"repeat(3,1fr)",lg:"repeat(4,1fr)", xl:"repeat(4,1fr)" }}
      padding={{ base: "3%" }}
    >
      <Box border="1px solid gray" margin="4%">
        <Box height="50%">
          <Box
            position="relative"
            top="3%"
            display="flex"
            justifyContent="right"
            padding="2%"
          >
            <Tag
              borderRadius="0px"
              backgroundColor="rgba(128, 128, 128, 0.575)"
              fontSize="80%"
              size={"sm"}
            >
              <GoPrimitiveDot color="green" />
              <Text>DRAFT</Text>
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
            <Text fontWeight="bold" fontSize={{ base: "90%" }}>
              XYZ
            </Text>
          </Box>
          <Box>
            <Text fontSize={{ base: "80%" }}>Last updated: 4/08/22</Text>
          </Box>
          <Box display="flex">
            <Box
              display="flex"
              width="40%"
              justifyContent="space-between"
              marginTop={{ base: "3%" }}
              marginBottom={{ base: "5%" }}
              marginRight="5%"
            >
              <HiOutlineDocumentText fontSize="90%" />
              <Text fontSize={{ base: "80%" }}> Lessons: 1</Text>
            </Box>
            <Box
              display="flex"
              width="45%"
              justifyContent="space-between"
              marginTop={{ base: "3%" }}
              marginBottom={{ base: "5%" }}
            >
              <AiOutlineClockCircle fontSize="90%" />
              <Text fontSize={{ base: "80%" }}> Minutes: 13</Text>
            </Box>
          </Box>
          <Box>
            <Tag
              borderRadius="5px"
              backgroundColor="rgba(128, 128, 128, 0.267)"
              fontSize="80%"
              size={"sm"}
              padding="1% 3% 2% 3%"
            >
              Marketing
            </Tag>
          </Box>
        </Box>
      </Box>

      <Box border="1px solid gray" margin="4%">
        <Box height="140px">
          <Box
            position="relative"
            top="3%"
            display="flex"
            justifyContent="right"
            padding="2%"
          >
            <Tag
              borderRadius="0px"
              backgroundColor="rgba(128, 128, 128, 0.575)"
              fontSize="80%"
              size={"sm"}
            >
              <GoPrimitiveDot color="green" />
              <Text>DRAFT</Text>
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
            <Text fontWeight="bold" fontSize={{ base: "90%" }}>
              XYZ
            </Text>
          </Box>
          <Box>
            <Text fontSize={{ base: "80%" }}>Last updated: 4/08/22</Text>
          </Box>
          <Box display="flex">
            <Box
              display="flex"
              width="40%"
              justifyContent="space-between"
              marginTop={{ base: "3%" }}
              marginBottom={{ base: "5%" }}
              marginRight="5%"
            >
              <HiOutlineDocumentText fontSize="90%" />
              <Text fontSize={{ base: "80%" }}> Lessons: 1</Text>
            </Box>
            <Box
              display="flex"
              width="45%"
              justifyContent="space-between"
              marginTop={{ base: "3%" }}
              marginBottom={{ base: "5%" }}
            >
              <AiOutlineClockCircle fontSize="90%" />
              <Text fontSize={{ base: "80%" }}> Minutes: 13</Text>
            </Box>
          </Box>
          <Box>
            <Tag
              borderRadius="5px"
              backgroundColor="rgba(128, 128, 128, 0.267)"
              fontSize="80%"
              size={"sm"}
              padding="1% 3% 2% 3%"
            >
              Marketing
            </Tag>
          </Box>
        </Box>
      </Box>

      <Box border="1px solid gray" margin="4%">
        <Box height="140px">
          <Box
            position="relative"
            top="3%"
            display="flex"
            justifyContent="right"
            padding="2%"
          >
            <Tag
              borderRadius="0px"
              backgroundColor="rgba(128, 128, 128, 0.575)"
              fontSize="80%"
              size={"sm"}
            >
              <GoPrimitiveDot color="green" />
              <Text>DRAFT</Text>
            </Tag>
          </Box>
          <Image
            marginTop="-32px"
            height="100%"
            width="100%"
            src={web3}
            alt="img1"
          />
        </Box>
        <Box textAlign="left" padding="5%" color="gray.600">
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "90%" }}>
              XYZ
            </Text>
          </Box>
          <Box>
            <Text fontSize={{ base: "80%" }}>Last updated: 4/08/22</Text>
          </Box>
          <Box display="flex">
            <Box
              display="flex"
              width="40%"
              justifyContent="space-between"
              marginTop={{ base: "3%" }}
              marginBottom={{ base: "5%" }}
              marginRight="5%"
            >
              <HiOutlineDocumentText fontSize="90%" />
              <Text fontSize={{ base: "80%" }}> Lessons: 1</Text>
            </Box>
            <Box
              display="flex"
              width="45%"
              justifyContent="space-between"
              marginTop={{ base: "3%" }}
              marginBottom={{ base: "5%" }}
            >
              <AiOutlineClockCircle fontSize="90%" />
              <Text fontSize={{ base: "80%" }}> Minutes: 13</Text>
            </Box>
          </Box>
          <Box>
            <Tag
              borderRadius="5px"
              backgroundColor="rgba(128, 128, 128, 0.267)"
              fontSize="80%"
              size={"sm"}
              padding="1% 3% 2% 3%"
            >
              Marketing
            </Tag>
          </Box>
        </Box>
      </Box>

      <Box border="1px solid gray" margin="4%">
        <Box height="140px">
          <Box
            position="relative"
            top="3%"
            display="flex"
            justifyContent="right"
            padding="2%"
          >
            <Tag
              borderRadius="0px"
              backgroundColor="rgba(128, 128, 128, 0.575)"
              fontSize="80%"
              size={"sm"}
            >
              <GoPrimitiveDot color="green" />
              <Text>DRAFT</Text>
            </Tag>
          </Box>
          <Image
            marginTop="-32px"
            height="100%"
            width="100%"
            src={web4}
            alt="img1"
          />
        </Box>
        <Box textAlign="left" padding="5%" color="gray.600">
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "90%" }}>
              XYZ
            </Text>
          </Box>
          <Box>
            <Text fontSize={{ base: "80%" }}>Last updated: 4/08/22</Text>
          </Box>
          <Box display="flex">
            <Box
              display="flex"
              width="40%"
              justifyContent="space-between"
              marginTop={{ base: "3%" }}
              marginBottom={{ base: "5%" }}
              marginRight="5%"
            >
              <HiOutlineDocumentText fontSize="90%" />
              <Text fontSize={{ base: "80%" }}> Lessons: 1</Text>
            </Box>
            <Box
              display="flex"
              width="45%"
              justifyContent="space-between"
              marginTop={{ base: "3%" }}
              marginBottom={{ base: "5%" }}
            >
              <AiOutlineClockCircle fontSize="90%" />
              <Text fontSize={{ base: "80%" }}> Minutes: 13</Text>
            </Box>
          </Box>
          <Box>
            <Tag
              borderRadius="5px"
              backgroundColor="rgba(128, 128, 128, 0.267)"
              fontSize="80%"
              size={"sm"}
              padding="1% 3% 2% 3%"
            >
              Marketing
            </Tag>
          </Box>
        </Box>
      </Box>

      <Box border="1px solid gray" margin="4%">
        <Box height="140px">
          <Box
            position="relative"
            top="3%"
            display="flex"
            justifyContent="right"
            padding="2%"
          >
            <Tag
              borderRadius="0px"
              backgroundColor="rgba(128, 128, 128, 0.575)"
              fontSize="80%"
              size={"sm"}
            >
              <GoPrimitiveDot color="green" />
              <Text>DRAFT</Text>
            </Tag>
          </Box>
          <Image
            marginTop="-32px"
            height="100%"
            width="100%"
            src={web5}
            alt="img1"
          />
        </Box>
        <Box textAlign="left" padding="5%" color="gray.600">
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "90%" }}>
              XYZ
            </Text>
          </Box>
          <Box>
            <Text fontSize={{ base: "80%" }}>Last updated: 4/08/22</Text>
          </Box>
          <Box display="flex">
            <Box
              display="flex"
              width="40%"
              justifyContent="space-between"
              marginTop={{ base: "3%" }}
              marginBottom={{ base: "5%" }}
              marginRight="5%"
            >
              <HiOutlineDocumentText fontSize="90%" />
              <Text fontSize={{ base: "80%" }}> Lessons: 1</Text>
            </Box>
            <Box
              display="flex"
              width="45%"
              justifyContent="space-between"
              marginTop={{ base: "3%" }}
              marginBottom={{ base: "5%" }}
            >
              <AiOutlineClockCircle fontSize="90%" />
              <Text fontSize={{ base: "80%" }}> Minutes: 13</Text>
            </Box>
          </Box>
          <Box>
            <Tag
              borderRadius="5px"
              backgroundColor="rgba(128, 128, 128, 0.267)"
              fontSize="80%"
              size={"sm"}
              padding="1% 3% 2% 3%"
            >
              Marketing
            </Tag>
          </Box>
        </Box>
      </Box>

      <Box border="1px solid gray" margin="4%">
        <Box height="140px">
          <Box
            position="relative"
            top="3%"
            display="flex"
            justifyContent="right"
            padding="2%"
          >
            <Tag
              borderRadius="0px"
              backgroundColor="rgba(128, 128, 128, 0.575)"
              fontSize="80%"
              size={"sm"}
            >
              <GoPrimitiveDot color="green" />
              <Text>DRAFT</Text>
            </Tag>
          </Box>
          <Image
            marginTop="-32px"
            height="100%"
            width="100%"
            src={web6}
            alt="img1"
          />
        </Box>
        <Box textAlign="left" padding="5%" color="gray.600">
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "90%" }}>
              XYZ
            </Text>
          </Box>
          <Box>
            <Text fontSize={{ base: "80%" }}>Last updated: 4/08/22</Text>
          </Box>
          <Box display="flex">
            <Box
              display="flex"
              width="40%"
              justifyContent="space-between"
              marginTop={{ base: "3%" }}
              marginBottom={{ base: "5%" }}
              marginRight="5%"
            >
              <HiOutlineDocumentText fontSize="90%" />
              <Text fontSize={{ base: "80%" }}> Lessons: 1</Text>
            </Box>
            <Box
              display="flex"
              width="45%"
              justifyContent="space-between"
              marginTop={{ base: "3%" }}
              marginBottom={{ base: "5%" }}
            >
              <AiOutlineClockCircle fontSize="90%" />
              <Text fontSize={{ base: "80%" }}> Minutes: 13</Text>
            </Box>
          </Box>
          <Box>
            <Tag
              borderRadius="5px"
              backgroundColor="rgba(128, 128, 128, 0.267)"
              fontSize="80%"
              size={"sm"}
              padding="1% 3% 2% 3%"
            >
              Marketing
            </Tag>
          </Box>
        </Box>
      </Box>

      <Box border="1px solid gray" margin="4%">
        <Box height="140px">
          <Box
            position="relative"
            top="3%"
            display="flex"
            justifyContent="right"
            padding="2%"
          >
            <Tag
              borderRadius="0px"
              backgroundColor="rgba(128, 128, 128, 0.575)"
              fontSize="80%"
              size={"sm"}
            >
              <GoPrimitiveDot color="green" />
              <Text>DRAFT</Text>
            </Tag>
          </Box>
          <Image
            marginTop="-32px"
            height="100%"
            width="100%"
            src={web5}
            alt="img1"
          />
        </Box>
        <Box textAlign="left" padding="5%" color="gray.600">
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "90%" }}>
              XYZ
            </Text>
          </Box>
          <Box>
            <Text fontSize={{ base: "80%" }}>Last updated: 4/08/22</Text>
          </Box>
          <Box display="flex">
            <Box
              display="flex"
              width="40%"
              justifyContent="space-between"
              marginTop={{ base: "3%" }}
              marginBottom={{ base: "5%" }}
              marginRight="5%"
            >
              <HiOutlineDocumentText fontSize="90%" />
              <Text fontSize={{ base: "80%" }}> Lessons: 1</Text>
            </Box>
            <Box
              display="flex"
              width="45%"
              justifyContent="space-between"
              marginTop={{ base: "3%" }}
              marginBottom={{ base: "5%" }}
            >
              <AiOutlineClockCircle fontSize="90%" />
              <Text fontSize={{ base: "80%" }}> Minutes: 13</Text>
            </Box>
          </Box>
          <Box>
            <Tag
              borderRadius="5px"
              backgroundColor="rgba(128, 128, 128, 0.267)"
              fontSize="80%"
              size={"sm"}
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
