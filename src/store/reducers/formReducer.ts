import * as types from '../types';
import { FormActionsType } from '../actions/formActions';

const initialState = {
    formConfigData: {
        title: "Тестовая форма",
        items: [
            {
                label: "Count",
                type: "numberfield"
            },
            {
                label: "Caption",
                type: "textfield"
            },
            {
                label: "Description",
                type: "textarea"
            },
            {
                label: "Is Editable",
                type: "checkbox"
            },
            {
                label: "Current date",
                type: "datafield"
            },
            {
                label: "Radio",
                type: "radio_buttons",
                points: [
                    {
                        label: "One",
                        value: 1
                    },
                    {
                        label: "Two",
                        value: 2
                    }
                ]
            }
        ],
        buttons: [
            {
                label: "Ok",
                type: "submit",
                clickHandler: () => { console.log('Ok button'); }
            },
            {
                label: "Cancel",
                type: "button",
                clickHandler: () => { console.log('Cancel button'); }
            },
            {
                label: "Reset",
                type: "reset",
                clickHandler: () => { console.log('Reset button'); }
            }
        ]
    }
};

export type State = typeof initialState;

const formReducer = (state: State = initialState, action: FormActionsType): State => {
    switch (action.type) {
        case types.SET_FORM_CONFIG: {
            return {...state, formConfigData: action.payload};
        }
        default:
            return state;
    }
};

export default formReducer;
