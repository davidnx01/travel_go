import React from 'react'
import { EasyStepConts } from '../../constants/easyStepsConts'
import "./EasyStep.css"

const EasyStep = () => {
  return (
    <>
        {EasyStepConts.map((step) => (
            <div className='easy-step_box'>
                <div className='easy-step_left-side'>
                    <div className='easy-step_left-side__box'>
                        <span>{step.icon}</span>
                    </div>
                </div>
        
                <div className='easy-step_right-side'>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                </div>
            </div>    
        ))}
    </>
  )
}

export default EasyStep