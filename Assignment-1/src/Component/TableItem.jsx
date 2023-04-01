import { useEffect, useState } from "react";
import minus from "../Assests/minus.png";
import plus from "../Assests/plus.png";
import "../Styles/MainPage.css";
import {DeleteIcon} from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { deleteData, getData } from "../Redux/action";

const TableItem = ({ page, id, price, interactions, design, integration,designCount, interactionsCount, integrationCount}) => {

    const dispatch = useDispatch();
    const totalPrice = price[designCount] + price[integrationCount] + price[interactionsCount];

    const deleteHandler= (id) => {
        dispatch(deleteData(id));
        dispatch(getData());
    }

    const plusHandler = (id) => {
        console.log("plus",id);
    };

    const minusHandler = (id) => {
        console.log("minus",id);
    }


    return (
        <tr className="tRow" key={id}>
            <td className="td1">
              <span className="numbering">{id < 10 ? `0${id}.` : `${id}.`}</span>
              <span className="rowContent">{page}</span>
            </td>

            <td className="td_Design td2">
              <div className="Page_Slider">
                <img className="minus" src={minus} alt="minus" onClick={() => minusHandler(id)}/>
                <span className={`frame78  large ${design[designCount]}`}>{design[designCount]}</span>
                <img className="plus" src={plus} alt="plus" onClick={() => plusHandler(id)} />
              </div>
            </td>

            <td className="td_Design td2">
              <div className="Page_Slider">
                <img className="minus" src={minus} alt="minus" onClick={() => minusHandler(id)}/>
                <span className={`frame78  large ${interactions[interactionsCount]}`}>{interactions[interactionsCount]}</span>
                <img className="plus" src={plus} alt="plus" onClick={() => plusHandler(id)} />
              </div>
            </td>

            <td className="td_Design td2">
              <div className="Page_Slider">
                <img className="minus" src={minus} alt="minus" onClick={() => minusHandler(id)}/>
                <span className={`frame78  large ${integration[integrationCount]}`}>{integration[integrationCount]}</span>
                <img className="plus" src={plus} alt="plus" onClick={() => plusHandler(id)} />
              </div>
            </td>

            <td className="td_Cost td3">
              <span className="frame72_200">${price[designCount] + price[integrationCount]+ price[interactionsCount]}</span>
            </td>

            <td className="td_Cost td3">
               <DeleteIcon color="red" _hover={{ cursor: "pointer" }} onClick={() => deleteHandler(id)}/>
            </td>
        </tr>
    );
};

export {TableItem};