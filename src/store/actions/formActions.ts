import * as actions from '../actions';
import {FormConfigData} from '../../types';

export const setFormConfig = (payload: FormConfigData) => ({
    type: actions.SET_FORM_CONFIG,
    payload
} as const);

export type FormActionsType = ReturnType<typeof setFormConfig>;
