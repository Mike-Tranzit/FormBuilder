import React, {ReactElement, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {selectResultStateHandler} from '../../helpers/StateHandlers';
import * as Elements from './FormElements/index';
import {FormElement} from "../../types";
import './FormResult.css';
export const FormResult: React.FC = (): ReactElement => {

    const {title, items, buttons} = useSelector(selectResultStateHandler);

    const elements = useCallback((params: FormElement & { key: string }) => ({
            "textfield": <Elements.InputField {...params}/>,
            "numberfield": <Elements.Number {...params}/>,
            "textarea": <Elements.TextareaField {...params}/>,
            "checkbox": <Elements.Checkbox {...params}/>,
            "datafield": <Elements.DateField {...params}/>,
            "radio_buttons": <Elements.Radio {...params}/>,
        } as {
            [key: string]: ReactElement
        }), []);

    return (
        <div>
            <form className="result-form" action="">
                {title && <Elements.Title title={title}/>}
                {items && items.map((item: FormElement, index: number) => {
                    const params = {...item, key: `${index}${item.label}`};
                    return elements(params)[item.type] || null;
                })}
                {buttons && <Elements.Buttons buttons={buttons}/>}
            </form>
        </div>
    );
};
