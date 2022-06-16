const Alert = ({message}) => {
    const alertStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }


    return(
        <div style={alertStyle}>
            {message}
        </div>
    )
}

export default Alert