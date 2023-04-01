import "../Styles/MainPage.css";
import circle from "../Assests/info.circle.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { getData } from "../Redux/action";
import { TableItem } from "./TableItem";

const MainPage = () => {

  const data = useSelector((store) => store.data);
  const dispatch = useDispatch();
  console.log("data in component", data);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getData());
    };
  }, [data, data.length, dispatch]);

  var total = 0;
  const totalCount = (value) => {
     total += value;
  }

  console.log("total", total);

  return (
    <div className="Container">
      <div className="firstChild">
        <div className="summary">

          <div className="pages">
            <p className="five">{data.length}</p>
            <p className="textwithfive">Pages</p>
          </div>

          <div className="numbers">
            <div className="frame86">
              <p className="text300">$300</p>
              <p className="pagedesign">Page Design</p>
            </div>

            <div className="frame86 extra200">
              <p className="text300">$200</p>
              <p className="pagedesign">Interactions & Animations</p>
            </div>

            <div className="frame86 extra100">
              <p className="text300">$100</p>
              <p className="pagedesign">CMS / Dynamic Data</p>
            </div>

            <div className="frame90">
              <p className="subtotal">Sub Total</p>
              <p className="doller800">${data.length > 0 ? total : 0}</p>
            </div>

          </div>
        </div>
        <div className="line">
          <hr className="lineinside"></hr>
        </div>
        <table className="table">
          <thead>
          <tr className="theader">
            <th className="td_pages td1">
              <span className="heading">Pages</span>
              <img className="headingIcon" src={circle} />
            </th>

            <th className="td_pages td2">
              <span className="heading">Design</span>
              <img className="headingIcon" src={circle} />
            </th>

            <th className="td_pages td2">
              <span className="heading">Interactions & Animations</span>
              <img className="headingIcon" src={circle} />
            </th>

            <th className="td_pages td2">
              <span className="heading">Integration</span>
              <img className="headingIcon" src={circle} />
            </th>

            <th className="td_pages td3 lastHeading">
              <span className="heading">Cost</span>
              <img className="headingIcon" src={circle} />
            </th>

            <th className="td_pages td3 lastHeading">
              <span className="heading">Delete</span>
              <img className="headingIcon" src={circle} />
            </th>
          </tr>
          </thead>
          <tbody>
            {
              data.length > 0 && data.map((el) => {
                return (
                  <TableItem
                    key={el.id}
                    page={el.page}
                    id={el.id}
                    price={el.price}
                    interactions={el.interactions}
                    design={el.design}
                    integration={el.integration}
                    designCount={el.designCount}
                    interactionsCount={el.interactionsCount}
                    integrationCount={el.integrationCount}
                  />
                )
              })
            }
          </tbody>

        </table>
      </div>
    </div>
  );
};

export { MainPage };
