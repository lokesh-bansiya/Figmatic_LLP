import { Box, Text } from "@chakra-ui/react";
import { Cards } from "./Cards";
import { Navbar } from "./Navbar";
import "../Styles/MainBox.css";
import { MenuDrawer } from "../Drawer/MenuDrawer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDashboardData } from "../Redux/action";
import { Pagination } from "./Pagination";

const Mainbox = () => {

  const dashboardData = useSelector(store => store.dashboardData);
  const totalCount = useSelector(store=> store.totalCount);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  console.log("totalCount", totalCount);
  
  const handlePageChange = (n) => {
    setPage((init) => init + n);
  };

  const handleChange = (value) => {
    dispatch(getDashboardData(page, value));
  }

  useEffect(() => {
    if (dashboardData.length === 0) {
      dispatch(getDashboardData(page,""));
    }
  }, [dashboardData, dashboardData.length, dispatch,page]);

  
  useEffect(() => {
    dispatch(getDashboardData(page,""));
  }, [dispatch, page]);

  return (
    <Box className="MainBoxContainer" >
      <Navbar />
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
        width="100%"
        padding={{ base: "2.5%", md: "1%" }}
        paddingTop={{ base: "25%", md: "10%", lg: "9%", xl: "9%" }}
      >
        <Box
          width={{ base: "65%", sm: "60%", md: "35%", lg: "30%", xl: "30%" }}
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
          fontWeight="700"
          color="gray.700"
          fontSize={{
            base: "0.6em",
            sm: "0.7em",
            md: "0.7em",
            lg: "0.7em",
            xl: "1em",
          }}
        >
          <Text className="MenuBar"><MenuDrawer /></Text>
          <Text _hover={{ textDecoration: "underline", cursor: "pointer" }} onClick={(e) => dispatch(getDashboardData(page,""))}>ALL</Text>
          <Text _hover={{ textDecoration: "underline", cursor: "pointer" }} onClick={(e) => dispatch(getDashboardData(page,"LIVE"))}>LIVE</Text>
          <Text _hover={{ textDecoration: "underline", cursor: "pointer" }} onClick={(e) => dispatch(getDashboardData(page,"DRAFT"))}>DRAFT</Text>
          <Text _hover={{ textDecoration: "underline", cursor: "pointer" }} onClick={(e) => dispatch(getDashboardData(page,"ARCHIVED"))}>ARCHIVED</Text>
        </Box>
        <Box width={{ base: "35%", sm: "30%", md: "25%", lg: "20%", xl: "20%" }} >
          <select onChange={(e) => handleChange(e.target.value)} className="selectBox" style={{ cursor: "pointer", border: "0.5px solid gray", fontSize: "80%", padding: "1%", }} placeholder="Select Team">
            <option>Select team</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select>
        </Box>
      </Box>
      <Box className="Grid_Container">
        {
          dashboardData.length > 0 && dashboardData.map((el) => {
            return (
              <Cards
                key={el._id}
                id={el._id}
                img={el.img}
                last_update={el.last_update}
                lesson={el.lesson}
                minute={el.minute}
                status={el.status}
                tag={el.tag}
                title={el.title}
                page={page}
              />
            )
          })
        }
      </Box>
      <Box>
        <Pagination
          onChange={handlePageChange}
          page={page}
          total={totalCount}
        />
      </Box>
    </Box>
  );
};

export { Mainbox };
