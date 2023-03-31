import "../Styles/MainPage.css";
import circle from "../Assests/info.circle.png";

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
                        <div className="frame86">
                            <p className="text300">$200</p>
                            <p className="pagedesign">Interactions & Animations</p>
                        </div>
                        <div className="frame86">
                            <p className="text300">$300</p>
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
                        <td className="td_pages"><span className="heading">Pages</span><img className="headingIcon" src={circle}/></td>
                        <td className="td_pages"><span>Design</span><img src={circle}/></td>
                        <td className="td_pages"><span>Interactions & Animations</span><img src={circle}/></td>
                        <td className="td_pages"><span>Integration</span><img src={circle}/></td>
                        <td className="td_pages"><span>Cost</span><img src={circle}/></td>
                    </th>
                    <tr className="tRow"></tr>
                </table>
            </div>
        </div>
    );
};

export { MainPage };