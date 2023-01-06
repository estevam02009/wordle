import { useState } from 'react';
import { AccuracyEnum } from '../../utilities/accuracy.util';
import { StyledLetterButton } from './index.style';

interface ILetterProps {
    position: number
    value: string
    accuracy: AccuracyEnum
}

export const Letter = ({position, value, accuracy}:ILetterProps) => {
    
    const [letterPosition, setLetterPosition] =useState(0)
    const [letterValue, setLetterValue] = useState('') 
    const [letterAccuracy, setLetterAccuracy] = useState(AccuracyEnum.none) 
    
    return (
        <StyledLetterButton accuracy={accuracy}>
            {value}
        </StyledLetterButton>
    )
}

export default Letter 