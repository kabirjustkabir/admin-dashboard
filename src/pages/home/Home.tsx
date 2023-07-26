import { BarChartBox } from "../../components/barChartBox/BarChartBox"
import BigChartBox from "../../components/bigChartBox/BigChartBox"
import { Chartbox } from "../../components/chartBox/Chartbox"
import PieChartBox from "../../components/pieChartBox/PieChartBox"
import { Topbox } from "../../components/topBox/Topbox"
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data"
import "./home.scss"
export const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <Topbox/>
      </div>
      <div className="box box2"><Chartbox {...chartBoxUser}/></div>
      <div className="box box3"><Chartbox {...chartBoxProduct}/></div>
      <div className="box box4"><PieChartBox/></div>
      <div className="box box5"><Chartbox {...chartBoxRevenue}/></div>
      <div className="box box6"><Chartbox {...chartBoxConversion}/></div>
      <div className="box box7"><BigChartBox/></div>
      <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>
    </div>
  )
}
