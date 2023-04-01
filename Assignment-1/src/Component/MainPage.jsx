import "../Styles/MainPage.css";
import circle from "../Assests/info.circle.png";
import minus from "../Assests/minus.png";
import plus from "../Assests/plus.png";

const MainPage = () => {
  return (
    <div className="Container">
      <div className="firstChild">
        <div className="summary">

          <div className="pages">
            <p className="five">5</p>
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
              <p className="doller800">$800</p>
            </div>
            
          </div>
        </div>
        <div className="line">
          <hr className="lineinside"></hr>
        </div>
        <table className="table">
          <th className="theader">
            <td className="td_pages td1">
              <span className="heading">Pages</span>
              <img className="headingIcon" src={circle} />
            </td>

            <td className="td_pages td2">
              <span className="heading">Design</span>
              <img className="headingIcon" src={circle} />
            </td>

            <td className="td_pages td2">
              <span className="heading">Interactions & Animations</span>
              <img className="headingIcon" src={circle} />
            </td>

            <td className="td_pages td2">
              <span className="heading">Integration</span>
              <img className="headingIcon" src={circle} />
            </td>

            <td className="td_pages td3 lastHeading">
              <span className="heading">Cost</span>
              <img className="headingIcon" src={circle} />
            </td>
          </th>
          <tr className="tRow">
            <td className="td1">
              <span className="numbering">01.</span>
              <span className="rowContent">Home</span>
            </td>

            <td className="td_Design td2">
              <div className="Page_Slider">
                <img className="minus" src={minus} alt="minus" />
                <span className="frame78 complex large">Complex</span>
                <img className="plus" src={plus} alt="plus" />
              </div>
            </td>

            <td className="td_Design td2">
              <div className="Page_Slider">
                <img className="minus" src={minus} alt="minus" />
                <span className="frame78 Advanced large">Advanced</span>
                <img className="plus" src={plus} alt="plus" />
              </div>
            </td>

            <td className="td_Design td2">
              <div className="Page_Slider">
                <img className="minus" src={minus} alt="minus" />
                <span className="frame78 none small">None</span>
                <img className="plus" src={plus} alt="plus" />
              </div>
            </td>

            <td className="td_Cost td3">
              <span className="frame72_200">$200</span>
            </td>
          </tr>

          <tr className="tRow">
            <td className="td1">
              <span className="numbering">02.</span>
              <span className="rowContent">Service</span>
            </td>

            <td className="td_Design td2">
              <div className="Page_Slider">
                <img className="minus" src={minus} alt="minus" />
                <span className="frame78 basic small">Basic</span>
                <img className="plus" src={plus} alt="plus" />
              </div>
            </td>

            <td className="td_Design td2">
              <div className="Page_Slider">
                <img className="minus" src={minus} alt="minus" />
                <span className="frame78 basic small2">Basic</span>
                <img className="plus" src={plus} alt="plus" />
              </div>
            </td>

            <td className="td_Design td2">
              <div className="Page_Slider">
                <img className="minus" src={minus} alt="minus" />
                <span className="frame78 small none">None</span>
                <img className="plus" src={plus} alt="plus" />
              </div>
            </td>

            <td className="td_Cost td3">
              <span className="frame72_200">$200</span>
            </td>
          </tr>

          <tr className="tRow">
            <td className="td1">
              <span className="numbering">03.</span>
              <span className="rowContent">About Us</span>
            </td>

            <td className="td_Design td2">
              <div className="Page_Slider">
                <img className="minus" src={minus} alt="minus" />
                <span className="frame78 Advanced small2">Advanced</span>
                <img className="plus" src={plus} alt="plus" />
              </div>
            </td>

            <td className="td_Design td2">
              <div className="Page_Slider">
                <img className="minus" src={minus} alt="minus" />
                <span className="frame78 small none">None</span>
                <img className="plus" src={plus} alt="plus" />
              </div>
            </td>

            <td className="td_Design td2">
              <div className="Page_Slider">
                <img className="minus" src={minus} alt="minus" />
                <span className="frame78 basic small2">Basic</span>
                <img className="plus" src={plus} alt="plus" />
              </div>
            </td>

            <td className="td_Cost td3">
              <span className="frame72_200">$200</span>
            </td>
          </tr>

          <tr className="tRow">
            <td className="td1">
              <span className="numbering">04.</span>
              <span className="rowContent">Partners</span>
            </td>

            <td className="td_Design td2">
              <div className="Page_Slider">
                <img className="minus" src={minus} alt="minus" />
                <span className="frame78 basic small">Basic</span>
                <img className="plus" src={plus} alt="plus" />
              </div>
            </td>

            <td className="td_Design td2">
              <div className="Page_Slider">
                <img className="minus" src={minus} alt="minus" />
                <span className="frame78 basic small2">Basic</span>
                <img className="plus" src={plus} alt="plus" />
              </div>
            </td>

            <td className="td_Design td2">
              <div className="Page_Slider">
                <img className="minus" src={minus} alt="minus" />
                <span className="frame78 small none">None</span>
                <img className="plus" src={plus} alt="plus" />
              </div>
            </td>

            <td className="td_Cost td3">
              <span className="frame72_200">$200</span>
            </td>
          </tr>

          <tr className="tRow">
            <td className="td1">
              <span className="numbering">05.</span>
              <span className="rowContent">Contact Us</span>
            </td>
            <td className="td_Design td2">
              <div className="Page_Slider">
                <img className="minus" src={minus} alt="minus" />
                <span className="frame78 complex large">Complex</span>
                <img className="plus" src={plus} alt="plus" />
              </div>
            </td>

            <td className="td_Design td2">
              <div className="Page_Slider">
                <img className="minus" src={minus} alt="minus" />
                <span className="frame78 small none">None</span>
                <img className="plus" src={plus} alt="plus" />
              </div>
            </td>

            <td className="td_Design td2">
              <div className="Page_Slider">
                <img className="minus" src={minus} alt="minus" />
                <span className="frame78 basic small2">Basic</span>
                <img className="plus" src={plus} alt="plus" />
              </div>
            </td>

            <td className="td_Cost td3">
              <span className="frame72_200">$200</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export { MainPage };
