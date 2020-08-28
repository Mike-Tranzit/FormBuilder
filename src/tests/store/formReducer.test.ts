import {initialState, default as formReducer} from "../../store/reducers/formReducer";
import * as t from "../../store/actions";
import * as payload from '../fixtures/settings.json';
import {FormConfigData} from "../../types";

describe('form reducer', () => {
    it('SET_FORM_CONFIG. formConfigData should"t be null', function () {
        const action = {
            type: t.SET_FORM_CONFIG,
            payload: payload as FormConfigData
        } as const;

        expect(formReducer(initialState, action)).toEqual({
            ...initialState,
            formConfigData: action.payload
        })
    });
});
