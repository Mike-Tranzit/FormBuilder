import React from 'react';
import {JSONchecker} from "../../../helpers/JSONchecker";

const correctJSON: string = '{id: 10}';
const inCorrectJSON: string = 'false JSON';


test('JSON should be correct', () => {
    const result = new JSONchecker(correctJSON).correctElements().inspectResult();
    expect(result).toBeTruthy();
});

test('JSON should be incorrect', () => {
    const result = new JSONchecker(inCorrectJSON).correctElements().inspectResult();
    expect(result).toBeFalsy();
});
