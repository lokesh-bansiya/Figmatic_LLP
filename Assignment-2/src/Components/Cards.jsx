import { Box, Image, Tag, Text } from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { GoPrimitiveDot } from "react-icons/go";
import "../Styles/Card.css";
import { ConfirmBox } from "../Modal/ConfirmBox";

const Cards = ({ id,page, img, last_update, lesson, minute, status, tag, title }) => {

  return (
    <>
      <Box className="ContainerBox" _hover={{ cursor: "pointer" }}>
        <Box className="FirstBox">
          <Box className="tag_box">
            <Tag className="tag1" size={"sm"} backgroundColor="rgba(128, 128, 128, 0.473)">
              <GoPrimitiveDot className={status} />
              <Text fontSize="70%" color="white">
                {status}
              </Text>
            </Tag>
          </Box>
          <Image
            marginTop="-32px"
            height="100%"
            width="100%"
            src={img}
            alt="img1"
          />
        </Box>

        <Box textAlign="left" padding="5%" color="gray.600" display="flex" flexDirection="column" justifyContent="space-between">
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "80%" }}>
              {title}
            </Text>
          </Box>
          <Box>
            <Text className="text1">{`Last updated: ${last_update}`}</Text>
          </Box>
          <Box display="flex" justifyContent="left">
            <Box className="textBox">
              <HiOutlineDocumentText className="Icons" />
              <Text className="text1"> {`Lessons: ${lesson}`}</Text>
            </Box>
            <Box className="textBox">
              <AiOutlineClockCircle className="Icons" />
              <Text className="text1">{`Minutes: ${minute}`}</Text>
            </Box>
          </Box>
          <Box>
            {
              tag.map((el,i) => {
                return (
                  <Tag
                    key={i}
                    borderRadius="5px"
                    backgroundColor="rgba(128, 128, 128, 0.267)"
                    fontSize="60%"
                    size={"sm"}
                    fontWeight="500"
                    padding="1% 3% 2% 3%"
                    m="1%"
                  >
                    {el}
                  </Tag>
                )
              })
            }
          </Box>
          <Box alignSelf="bottom" display="flex" justifyContent="center" alignItems="center" padding="1%">
            <ConfirmBox key={id} id={id} page={page}/>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export { Cards };
