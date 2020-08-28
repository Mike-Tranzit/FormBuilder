import {initialState, default as formReducer} from "../../store/reducers/formReducer";
import { createStore } from "redux";
import * as t from "../../store/actions";
import {setFormConfig} from "../../store/actions/formActions";
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

    it('SET_FORM_CONFIG. Set data in store should be correct', () => {
        const store = createStore(formReducer);
        store.dispatch(setFormConfig(payload as FormConfigData));
        expect(store.getState().formConfigData).toEqual(payload);
    })
});
