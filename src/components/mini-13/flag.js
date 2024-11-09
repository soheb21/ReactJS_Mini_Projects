
const flagDataAPI = {
    showTicTacToeComp: false,
    showAccordionComp: true,
    showCarousalComp: true,
    showHexColorComp: true,
    showModelComp: true
}

export const fetchDataFlagAPI = () => {
    return (
        new Promise((resolve, reject) => {
            if (flagDataAPI) setTimeout(() => resolve(flagDataAPI), 500)
            else reject("something went wrong");
        })
    )
}