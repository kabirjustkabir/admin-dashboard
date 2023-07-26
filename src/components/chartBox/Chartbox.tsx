import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'
import './chartbox.scss'
import {Link} from 'react-router-dom'

type Props = {
    color:string,
    icon:string,
    title:string,
    dataKey:string,
    number: number | string,
    percentage: number,
    chartData: object[]
}
export const Chartbox = (props:Props) => {
  return (
    <div className='chartbox'>
        <div className="boxinfo">
            <div className="title">
                <img src={props.icon} alt="" />
                <span>{props.title}</span>
            </div>
            <h1>{props.number}</h1>
            <Link to="/" style={{ color:props.color }}>View All</Link>
        </div>
        <div className="chartinfo">
            <div className="chart">
                <ResponsiveContainer width="99%" height="100%">
                    <LineChart data={props.chartData}>
                        <Tooltip 
                        contentStyle={{background:"transparent",border:"none"}}
                        labelStyle={{display:"none"}}
                        position={{x:10,y:50}}/>
                        <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="texts">
                <div className="percentage" style={{ color: props.percentage<0 ? "tomato":"green" }}>{props.percentage}</div>
                <div className="duration">This Month</div>
            </div>
        </div>
    </div>
  )
}
