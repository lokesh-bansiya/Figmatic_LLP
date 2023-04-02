import "../Styles/MainPage.css";
import circle from "../Assests/info.circle.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { getData } from "../Redux/action";
import { TableItem } from "./TableItem";
import { AddNewData } from "../Modal/AddData";
import { Pagination } from "./Pagination";
import { Box } from "@chakra-ui/react";

const MainPage = () => {

  const products = useSelector((store) => store.data);
  const count = useSelector((store) => store.count);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  // console.log(count);

  const handlePageChange = (n) => {
    setPage((init) => init + n);
  };


  useEffect(() => {
    dispatch(getData(page, 2));
  }, [dispatch, page]);


  useEffect(() => {
    if (products.length === 0) {
      dispatch(getData(page, 5));
      console.log(page)
    };
  }, [products, products.length, dispatch, page]);


  const sum = useMemo(() => {
    return products.reduce((sum, el) => {
      return sum + el.price[el.designCount] + el.price[el.integrationCount] + el.price[el.interactionsCount]
    }, 0)
  }, [products]);

  return (
    <>

      <div className="Container">
        <div className="button">
          <AddNewData />
        </div>
        <div className="firstChild">
          <div className="summary">

            <div className="pages">
              <p className="five">{count}</p>
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
                <p className="doller800">${products.length > 0 ? sum : 0}</p>
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
                products.length > 0 && products.map((el, i) => {
                  return (
                    <TableItem
                      key={el._id}
                      _id={el._id}
                      page={el.page}
                      index={i + 1}
                      price={el.price}
                      interactions={el.interactions}
                      design={el.design}
                      integration={el.integration}
                      designCount={el.designCount}
                      interactionsCount={el.interactionsCount}
                      integrationCount={el.integrationCount}
                      pageno={page}
                      count={count}
                    />
                  )
                })
              }
            </tbody>

          </table>
          <Box>
            <Pagination
              onChange={handlePageChange}
              page={page}
              total={count}
            />
          </Box>
        </div>
      </div>
    </>
  );
};

export { MainPage };
