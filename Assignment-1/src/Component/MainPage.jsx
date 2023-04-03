import "../Styles/MainPage.css";
import circle from "../Assests/info.circle.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "../Redux/action";
import { TableItem } from "./TableItem";
import { AddNewData } from "../Modal/AddData";
import { Pagination } from "./Pagination";
import { Box, Image } from "@chakra-ui/react";
import loadingforhome from "../Assests/loadingforhome.gif";

const MainPage = () => {

  const products = useSelector((store) => store.data);
  const count = useSelector((store) => store.count);
  const totalSum = useSelector(store => store.totalSum);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const startingIndex = (page - 1) * 5 + 1;

  const handlePageChange = (n) => {
    setPage((init) => init + n);
  };

  useEffect(() => {
    dispatch(getData(page));
  }, [dispatch, page]);


  useEffect(() => {
    if (products.length === 0) {
      dispatch(getData(page));
    };
  }, [products, products.length, dispatch, page]);

  return (
    <>

      <div className="Container">
        <div className="button">
          <AddNewData pageno={page} />
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
                <p className="doller800">${products.length > 0 ? totalSum : 0}</p>
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
            {
              products.length > 0 ?
                (
                  <tbody>
                    {
                      products.map((item, index) => ({
                        ...item,
                        serialNumber: startingIndex + index
                      })).map((el, i) => {
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
                            serialNumber={el.serialNumber}
                          />
                        )
                      })
                    }
                  </tbody>
                ) : (
                  <Box display="flex" justifyContent="center" alignItems="center" width="100%" height={{ base: "150px", sm: "200px", md: "230pxvh", lg: "300px", xl: "330px" }}>
                    <Image width="30%" src={loadingforhome} alt="Loading..." />
                  </Box>
                )
            }
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
