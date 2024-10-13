import React, { useState } from 'react'
import "./Accordion.css"

const Accordion = () => {
    const data = [
        {
            "title": "Section 1: Introduction",
            "content": "This is the first section. It contains a brief introduction to the content of the accordion."
        },
        {
            "title": "Section 2: Features",
            "content": "This section outlines the main features of our product, including its key functionalities and benefits."
        },
        {
            "title": "Section 3: Pricing Plans",
            "content": "In this section, you will find detailed information about the different pricing plans available for our service."
        },
        {
            "title": "Section 4: Frequently Asked Questions",
            "content": "Here we answer some of the most common questions our users ask about the service."
        },
        {
            "title": "Section 5: Contact Us",
            "content": "If you have any further inquiries or need assistance, feel free to contact our support team through this section."
        }
    ]
    const [currentInd, setCurrentInd] = useState(null)
    const [multiShow, setMultiShow] = useState(false)
    const [multiSelection, setMultiSelection] = useState([])

    const handleMultiSelected = (currID) => {
        let cpyArr = [...multiSelection];
        let findcurrID = cpyArr.indexOf(currID); //we get index of the particuar elent which is equal to currID
        if (findcurrID === -1) cpyArr.push(currID);
        else cpyArr.splice(findcurrID, 1); //remove the elemnent
        setMultiSelection(cpyArr);

    }




    return (
        <div className='accordion container flexFamily'>
            <button onClick={() => setMultiShow(!multiShow)}>{multiShow ? "Disaable Multi-Selection" : "Enable Multi-Selection"}</button>
            {
                data.map((item, ind) => (
                    <ul key={ind}>
                        <li>{item?.title} <span onClick={multiShow ? () => handleMultiSelected(ind) : () => setCurrentInd(currentInd === ind ? null : ind)}>{currentInd === ind || multiSelection.indexOf(ind) !== -1 ? "Close" : "Open"}</span></li>
                        {
                            currentInd === ind || multiSelection.indexOf(ind) !== -1 ? <li>{item?.content}</li> : ""
                        }

                    </ul>
                ))
            }

        </div >
    )
}

export default Accordion