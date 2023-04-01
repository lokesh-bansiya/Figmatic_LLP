import minus from "../Assests/minus.png";
import plus from "../Assests/plus.png";
import "../Styles/MainPage.css";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { deleteData, getData, updateData } from "../Redux/action";

const TableItem = ({ page, index, price, interactions, design, integration, designCount, interactionsCount, integrationCount, _id }) => {

    const dispatch = useDispatch();

    const deleteHandler = (_id) => {
        dispatch(deleteData(_id)).then(() => dispatch(getData()));
    }

    const plusHandler = (_id, value) => {
        if (value === "design") {
            var change = designCount = designCount + 1;
            if (change <= 3) {
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
                dispatch(updateData(_id, payload)).then(() => dispatch(getData()));
            }
        }
        else if (value === "interactions") {
            var change = interactionsCount = interactionsCount + 1;
            if (change <= 3) {
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
                dispatch(updateData(_id, payload)).then(() => dispatch(getData()));
            }
        }
        else {
            var change = integrationCount = integrationCount + 1;
            if (change <= 3) {
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
                dispatch(updateData(_id, payload)).then(() => dispatch(getData()));
            }
        }
    };

    const minusHandler = (id, value) => {
        if (value === "design") {
            var change = designCount = designCount - 1;
            if (change >= 0) {
                // console.log("design", change);
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
                dispatch(updateData(_id, payload)).then(() => dispatch(getData()));
            }
        }
        else if (value === "interactions") {
            var change = interactionsCount = interactionsCount - 1;
            if (change >= 0) {
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
                dispatch(updateData(_id, payload)).then(() => dispatch(getData()));
            }
        }
        else {
            var change = integrationCount = integrationCount - 1;
            if (change >= 0) {
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
                dispatch(updateData(_id, payload)).then(() => dispatch(getData()));
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
                <DeleteIcon color="gray" _hover={{ cursor: "pointer", transform: "scale(1.3)", transition: "0.4s ease-in", color: "red" }} onClick={() => deleteHandler(_id)} />
            </td>
        </tr>
    );
};

export { TableItem };
