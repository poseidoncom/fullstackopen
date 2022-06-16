const Total = ({parts}) =>{
    
    console.log("ennen totalia",parts[0].exercise+parts[1].exercise)
    
    const total = parts.reduce( (s, p, i) => {
        console.log('what is happening',i,': ', s, p)
        i+=1
        let result = s + p.exercise 
        //koska edellinen eli 's' on alussa olio ja jatkossa numero, lisätään ehtolause.
        if(i===2){
            result = s.exercise + p.exercise
        }
        console.log('tulos on: ',result)
        return result
    }
    );

    console.log(total)
    return(
        <p>Number of exercises {total}</p>
    )
}
export default Total