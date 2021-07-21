import React from 'react'

function Main() {

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize: 50
    }

    if (hours < 12) {
        timeOfDay = "Morning"
    }
    else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon"
        styles.color = "blue"
    }
    else {
        timeOfDay = "Night"
    }
    return (
        <h1 style={styles}>Good {timeOfDay}!</h1>
    )
}

export default Main