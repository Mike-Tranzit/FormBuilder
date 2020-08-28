import * as actions from '../actions';
import { FormActionsType } from '../actions/formActions';
import { State } from '../../types/index';

export const initialState: State = {
    formConfigData: null!
};

const formReducer = (state: State = initialState, action: FormActionsType): State => {
    switch (action.type) {
        case actions.SET_FORM_CONFIG: {
            return {...state, formConfigData: action.payload};
        }
        default:
            return state;
    }
};

export default formReducer;
