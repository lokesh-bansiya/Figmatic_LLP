import minus from "../Assests/minus.png";
import plus from "../Assests/plus.png";
import "../Styles/MainPage.css";
import { useDispatch } from "react-redux";
import { getData, updateData } from "../Redux/action";
import { Box, useToast } from "@chakra-ui/react";
import { Confirm } from "../Modal/ConfirmModal";

const TableItem = ({ page,pageno,count, index, price, interactions, design, integration, designCount, interactionsCount, integrationCount, _id }) => {

    const dispatch = useDispatch();
    const toast = useToast();

    const plusHandler = (_id, value) => {
        if (value === "design") {
            
            if (designCount < 3) {
                var change = designCount = designCount + 1;
                console.log("design", change);
                var payload = {
                    page,
                    design,
                    integration,
                    interactions,
                    price,
                    designCount: change,
                    interactionsCount,
                    integrationCount,
                }
                dispatch(updateData(_id, payload))
                    .then(() => dispatch(getData(pageno,5)))
                    .then(() => toast({
                        status: "success",
                        duration: 2000,
                        position: "top",
                        isClosable: true,
                        render: () => (
                            <Box
                                border="1px solid blue"
                                textAlign="center"
                                borderRadius="6px"
                                fontWeight="500"
                                color="green"
                                fontSize={{ base: "80%", sm: "80%", md: "95%", lg: "100%", xl: "130%" }}
                                p={3}
                                bg="#c3e6cd"
                                boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                            >
                                {`${page} page's design status updated to ${design[designCount]}!`}
                            </Box>
                        ),
                    }))
            }
        }
        else if (value === "interactions") {
            
            if (interactionsCount < 3) {
                var change = interactionsCount = interactionsCount + 1;
                console.log("interactionsCount", change);
                var payload = {
                    page,
                    design,
                    integration,
                    interactions,
                    price,
                    designCount,
                    interactionsCount: change,
                    integrationCount,
                }
                dispatch(updateData(_id, payload))
                    .then(() => dispatch(getData(pageno,5)))
                    .then(() => toast({
                        status: "success",
                        duration: 2000,
                        position: "top",
                        isClosable: true,
                        render: () => (
                            <Box
                                border="1px solid blue"
                                textAlign="center"
                                borderRadius="6px"
                                fontWeight="500"
                                fontSize={{ base: "80%", sm: "80%", md: "95%", lg: "100%", xl: "130%" }}
                                color="green"
                                p={3}
                                bg="#c3e6cd"
                                boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                            >
                                {`${page} page's interactions & animations status updated to ${interactions[interactionsCount]}!`}
                            </Box>
                        ),
                    }))
            }
        }
        else {
            if (integrationCount < 3) {
                var change = integrationCount = integrationCount + 1;
                console.log("integrationCount ", change);
                var payload = {
                    page,
                    design,
                    integration,
                    interactions,
                    price,
                    designCount,
                    interactionsCount,
                    integrationCount: change,
                }
                dispatch(updateData(_id, payload))
                    .then(() => dispatch(getData(pageno,5)))
                    .then(() => toast({
                        status: "success",
                        duration: 2000,
                        position: "top",
                        isClosable: true,
                        render: () => (
                            <Box
                                border="1px solid blue"
                                textAlign="center"
                                borderRadius="6px"
                                fontWeight="500"
                                color="green"
                                fontSize={{ base: "80%", sm: "80%", md: "95%", lg: "100%", xl: "130%" }}
                                p={3}
                                bg="#c3e6cd"
                                boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                            >
                                {`${page} page's integration status updated to ${integration[integrationCount]}!`}
                            </Box>
                        ),
                    }))
            }
        }
    };

    const minusHandler = (id, value) => {
        if (value === "design") {
            if (designCount > 0) {
                var change = designCount = designCount - 1;
                console.log("design", change);
                var payload = {
                    page,
                    design,
                    integration,
                    interactions,
                    price,
                    designCount: change,
                    interactionsCount,
                    integrationCount,
                }
                dispatch(updateData(_id, payload))
                    .then(() => dispatch(getData(pageno,5)))
                    .then(() => toast({
                        status: "success",
                        duration: 2000,
                        position: "top",
                        isClosable: true,
                        render: () => (
                            <Box
                                border="1px solid blue"
                                textAlign="center"
                                borderRadius="6px"
                                fontWeight="500"
                                color="green"
                                fontSize={{ base: "80%", sm: "80%", md: "95%", lg: "100%", xl: "130%" }}
                                p={3}
                                bg="#c3e6cd"
                                boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                            >
                                {` ${page} page's design status updated to ${design[designCount]}!`}
                            </Box>
                        ),
                    }))
            }
        }
        else if (value === "interactions") {

            if (interactionsCount > 0) {
                var change = interactionsCount = interactionsCount - 1;
                console.log("interactionsCount", change);
                var payload = {
                    page,
                    design,
                    integration,
                    interactions,
                    price,
                    designCount,
                    interactionsCount: change,
                    integrationCount,
                }
                dispatch(updateData(_id, payload))
                    .then(() => dispatch(getData(pageno, 5)))
                    .then(() => toast({
                        status: "success",
                        duration: 2000,
                        position: "top",
                        isClosable: true,
                        render: () => (
                            <Box
                                border="1px solid blue"
                                textAlign="center"
                                borderRadius="6px"
                                fontWeight="500"
                                color="green"
                                fontSize={{ base: "80%", sm: "80%", md: "95%", lg: "100%", xl: "130%" }}
                                p={3}
                                bg="#c3e6cd"
                                boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                            >
                                {`${page} page's interactions & animations status updated to ${interactions[interactionsCount]}!`}
                            </Box>
                        ),
                    }))
            }
        }
        else {

            if (integrationCount > 0) {
                var change = integrationCount = integrationCount - 1;
                console.log("integrationCount", change);
                var payload = {
                    page,
                    design,
                    integration,
                    interactions,
                    price,
                    designCount,
                    interactionsCount,
                    integrationCount: change,
                }
                dispatch(updateData(_id, payload))
                    .then(() => dispatch(getData(pageno, 5)))
                    .then(() => toast({
                        status: "success",
                        duration: 2000,
                        position: "top",
                        isClosable: true,
                        render: () => (
                            <Box
                                border="1px solid blue"
                                textAlign="center"
                                borderRadius="6px"
                                fontWeight="500"
                                color="green"
                                fontSize={{ base: "80%", sm: "80%", md: "95%", lg: "100%", xl: "130%" }}
                                p={3}
                                bg="#c3e6cd"
                                boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                            >
                                {`${page} page's integration status updated to ${integration[integrationCount]}!`}
                            </Box>
                        ),
                    }))
            }
        }
    }


    return (
        <tr className="tRow" key={_id}>
            <td className="td1">
                <span className="numbering">{index < 10 ? `0${index}.` : `${index}.`}</span>
                <span className="rowContent">{page}</span>
            </td>

            <td className="td_Design td2">
                <div className="Page_Slider">
                    <img className="minus" src={minus} alt="minus" onClick={() => minusHandler(_id, "design")} />
                    <span className={`frame78  large ${design[designCount]}`}>{design[designCount]}</span>
                    <img className="plus" src={plus} alt="plus" onClick={() => plusHandler(_id, "design")} />
                </div>
            </td>

            <td className="td_Design td2">
                <div className="Page_Slider">
                    <img className="minus" src={minus} alt="minus" onClick={() => minusHandler(_id, "interactions")} />
                    <span className={`frame78  large ${interactions[interactionsCount]}`}>{interactions[interactionsCount]}</span>
                    <img className="plus" src={plus} alt="plus" onClick={() => plusHandler(_id, "interactions")} />
                </div>
            </td>

            <td className="td_Design td2">
                <div className="Page_Slider">
                    <img className="minus" src={minus} alt="minus" onClick={() => minusHandler(_id, "integration")} />
                    <span className={`frame78  large ${integration[integrationCount]}`}>{integration[integrationCount]}</span>
                    <img className="plus" src={plus} alt="plus" onClick={() => plusHandler(_id, "integration")} />
                </div>
            </td>

            <td className="td_Cost td3">
                <span className="frame72_200">${price[designCount] + price[integrationCount] + price[interactionsCount]}</span>
            </td>

            <td className="td_Cost td3">
                <Confirm key={_id} id={_id} page={page} />
            </td>
        </tr>
    );
};

export { TableItem };
