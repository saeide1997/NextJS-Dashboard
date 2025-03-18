import OrderChart from "../../components/orderChart";
import SellChart from "../../components/sellChart";
import StatusChart from "../../components/statusChart";
import TotalOrder from "../../components/totalOrder";
import TotalOrderQuantity from "../../components/totalOrderQuantity";
import TotalSale from "../../components/totalSell";
import TotalUser from "../../components/totalUser";
import UserChart from "../../components/userChart";

const Analisys = () => {
  return (
    <div className=" w-[calc(100vw-180px)] mt-5 ">
      <div className="flex flex-wrap mx-3 ">
        <UserChart  />
        <OrderChart  />
        <SellChart  />
      </div>
      <div className="flex flex-col md:flex-row mx-3 mt-3">
        <StatusChart  />
        <div className="flex flex-wrap">
            <div className="flex flex-wrap">
          <TotalUser />
          <TotalSale />
            </div>
            <div className="flex flex-wrap">
          <TotalOrder />
          <TotalOrderQuantity />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Analisys;