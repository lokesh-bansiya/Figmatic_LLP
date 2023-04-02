import { Box, Button, Image, Tag, Text, useToast } from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { GoPrimitiveDot } from "react-icons/go";
import "../Styles/Card.css";
import { useDispatch } from "react-redux";
import { deleteDashboardData, getDashboardData } from "../Redux/action";

const Cards = ({ id, img, last_update, lesson, minute, status, tag, title }) => {

  const dispatch = useDispatch();
  const toast = useToast();

  const deleteHandler = (id) => {
    dispatch(deleteDashboardData(id))
      .then(() => dispatch(getDashboardData()))
      .then(() =>
        toast({
          title: "Data !",
          description: "New Page Added!",
          status: "warning",
          duration: 2000,
          position: "top",
          isClosable: true,
          render: () => (
            <Box
              border="1px solid green"
              textAlign="center"
              borderRadius="10px"
              fontWeight="bold"
              color="white"
              fontSize="100%"
              p={3}
              bg="red"
              boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
            >
              {`Dasboard data deleted!`}
            </Box>
          ),
        })
      )
      .catch((err) =>
        toast({
          title: "Error!",
          description: "Something went wrong!",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        })
      );
  };

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

        <Box textAlign="left" padding="5%" color="gray.600">
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
              tag.map((el) => {
                return (
                  <Tag
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
          <Box display="flex" justifyContent="center" alignItems="center" padding="1%">
            <button className="removeBtn" onClick={() => deleteHandler(id)}>Remove</button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export { Cards };
