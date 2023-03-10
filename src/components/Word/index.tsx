import { useEffect, useState } from "react"
import { AccuracyEnum } from "../../utilities/accuracy.util"
import Letter from "../Letter"

interface IWordProps {
    isWordEvaluated: boolean
    guessWordValue: string
}

export const Word = ({ isWordEvaluated, guessWordValue }: IWordProps) => {

    const [isEvaluated, setIsEvaluated] = useState(false)
    const [guessValue, setGuessValue] = useState('')

    useEffect(() => {
        setGuessValue(guessWordValue)},
        [guessWordValue]
    )

    useEffect(() => {
        setIsEvaluated(isWordEvaluated)},
            [isWordEvaluated]
    )

    return (
        
        // letter redering goes here
        <>
            {
                guessValue.toUpperCase()
                .split('')
                .map( (nextLetter, letterIndex) => {
                    
                    return(
                        <Letter 
                            key={'letter_' + letterIndex}
                            value={nextLetter}
                            accuracy={AccuracyEnum.none}
                            position={letterIndex} 
                        />
                    ) 
                }
            )}
        </>
    );
}