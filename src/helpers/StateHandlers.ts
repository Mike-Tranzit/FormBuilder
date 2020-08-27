import {State} from "../types";

export const selectConfigStateHandler = ({formConfigData}: State): string | undefined => {
    const dataIsEmpty = typeof formConfigData !== 'object' || !formConfigData;
    if(dataIsEmpty) return;
    return JSON.stringify(formConfigData, null, 2);
};


export const selectResultStateHandler = (state: State) => state.formConfigData || {};
