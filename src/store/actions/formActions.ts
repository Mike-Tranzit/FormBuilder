import * as types from '../types';

export const setFormConfig = (payload: any) => ({
    type: types.SET_FORM_CONFIG,
    payload
} as const);

export type FormActionsType = ReturnType<typeof setFormConfig>;
