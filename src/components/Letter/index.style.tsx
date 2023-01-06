import React from 'react';
import styled from 'styled-components';
import { accuracyColorMap, AccuracyEnum } from '../../utilities/accuracy.util';

export const StyledLetterButton = styled.button <{ accuracy: AccuracyEnum }>`
    margin: 2px;
    width: 50px;
    height: 50px;
    border-radius: 2px;
    color: white;
    font-size: 30px;
    font-weight: bold;
    background: ${props => accuracyColorMap.get(props.accuracy)};
`