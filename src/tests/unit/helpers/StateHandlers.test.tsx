import React from 'react';
import {selectConfigStateHandler, selectResultStateHandler} from "../../../helpers/StateHandlers";
import {State} from "../../../types";

const correctJsonObject = {
    formConfigData: {
        items: [],
        buttons: []
    }
};

const inCorrectJsonObject = {
    formConfigData: null!
};

test('selectConfigStateHandler should return correct JSON string', () => {
    const result = selectConfigStateHandler(correctJsonObject);
    expect(typeof result).toBe('string');
});

test('selectConfigStateHandler should return undefined', () => {
    const result = selectConfigStateHandler(inCorrectJsonObject as State);
    expect(typeof result).toBe('undefined');
});
