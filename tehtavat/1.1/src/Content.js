import Part from "./Part"

const Content = ({parts}) =>{
    console.log(JSON.stringify(parts))
    
    return(
        <div>
            {parts.map(part =>
                <Part key={part.id} part={part}/>
                )}
        </div>
    )
}
export default Content