import React, {ReactElement} from 'react';
import {useSelector} from 'react-redux';
import {State} from '../../types';
import {Title, InputField, Number, Checkbox, DateField, TextareaField, Radio, Buttons} from './FormElements/index';
import {FormElement} from "../../types";
import './FormResult.css';

export const FormResult: React.FC = (): ReactElement => {

    const selectStateHandler = (state: State) => state.formConfigData || {};
    const formConfigData = useSelector(selectStateHandler);
    const {title, items, buttons} = formConfigData;

    const elements = (params: FormElement & {key: string}) => ({
        "textfield": <InputField {...params}/>,
        "numberfield": <Number {...params}/>,
        "textarea": <TextareaField {...params}/>,
        "checkbox": <Checkbox {...params}/>,
        "datafield": <DateField {...params}/>,
        "radio_buttons": <Radio {...params}/>,
    } as {
        [key: string]: ReactElement
    });

    return (
        <div>
            <form className="result-form" action="">
                {title && <Title title={title}/>}
                {items && items.map((item: FormElement, index: number) => {
                    const params = {...item, key: `${index}${item.label}`};
                    return elements(params)[item.type] || null;
                } )}
                {buttons && <Buttons buttons={buttons}/>}
            </form>
        </div>
    );
};
