import { useState } from 'react';
import { AccuracyEnum } from '../../utikities/accuracy.util';

interface ILetterProps {
    position: number
    value: string
    accuracy: AccuracyEnum
}

export const Letter = ({position, value, accuracy}:ILetterProps) => {
    
    const [letterPosition, setLetterPosition] =useState(0)
    const [letterValue, setLetterValue] = useState('')
    const [letterAccuracy, setLetterAccuracy] = useState(AccuracyEnum.none)
}