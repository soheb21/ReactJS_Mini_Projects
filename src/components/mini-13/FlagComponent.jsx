import React, { useContext } from 'react'
import TicTacToe from '../mini-12/TicTacToe'
import Accordion from '../mini-1/Accordion'
import Carasoul from '../mini-4/Carasoul'
import RandomColor from '../mini-2/RandomColor'
import Model from '../mini-10/Model'
import { flagContext } from './Context'

const FlagComponent = () => {
    const componentToRender = [
        {
            label: 'showTicTacToeComp',
            comp: <TicTacToe />
        },
        {
            label: 'showAccordionComp',
            comp: <Accordion />
        },
        {
            label: 'showCarousalComp',
            comp: <Carasoul />
        },
        {
            label: 'showHexColorComp',
            comp: <RandomColor />
        },
        {
            label: 'showModelComp',
            comp: <Model />
        }
    ]

    const { laoding, enableComp } = useContext(flagContext);
    const check = (getcurrComp) => {
        return enableComp[getcurrComp]
    }

    return (
        <div className='container flexFamily'>
            {
                laoding ? <h1>Loading please wait...</h1>
                    : <div className="flexFamily">
                        {
                            componentToRender && componentToRender.map((component, ind) => {
                                return (
                                    <div key={ind}>
                                        {check(component.label) && component.comp}
                                    </div>
                                )
                            })
                        }
                    </div>
            }

        </div>
    )
}

export default FlagComponent