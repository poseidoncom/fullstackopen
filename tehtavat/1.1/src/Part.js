const Part = (props) => {
    console.log('partin propsi'+ JSON.stringify(props))
    return(
        <p>{props.part.name}: {props.part.exercise}</p>
    )
    
}

export default Part