import * as t from "../../store/actions";
import {setFormConfig} from "../../store/actions/formActions";
import * as payload from '../fixtures/settings.json';
import {FormConfigData} from "../../types";

describe('formActions', () => {
    it('should return same payload and correct type', function () {
        const action = {
            type: t.SET_FORM_CONFIG,
            payload: payload as FormConfigData
        } as const;

        expect(setFormConfig(action.payload)).toEqual(action);
    });
});
