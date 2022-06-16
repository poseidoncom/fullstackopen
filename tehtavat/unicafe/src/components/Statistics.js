import React from "react"
import StatisticLine from "./StatisticLine"

const Statistics = (props) =>{
    //console.log(props)
    const total = props.goods+props.neutrals+props.bads
    const average = (1*props.goods+0*props.neutrals+(-1)*props.bads)/total
    const positive = ((props.goods/total)*100).toFixed(2)+' %'
    if (props.goods === 0 && props.neutrals === 0 && props.bads ===0) {
        return(
            <p>No feedback given</p>
        )
    }
    return(
        <div>
            <table>
                <tbody>
                    <StatisticLine text='good' value={props.goods}/>
                    <StatisticLine text='neutral' value={props.neutrals}/>
                    <StatisticLine text='bad' value={props.bads}/>
                    <StatisticLine text='average' value={average.toFixed(3)}/>
                    <StatisticLine text='positive' value={positive}/>
                </tbody>         
            </table>
        </div>
    )
   
}

export default Statistics