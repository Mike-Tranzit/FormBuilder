import React, {ReactElement} from 'react';
import {FormElement, FormRadioElement} from "../../../types";

export const Radio: React.FC<FormElement> = ({label, points = []}: FormElement): ReactElement => {

    const RadioButton: React.FC<FormRadioElement> = ({value, label} : FormRadioElement): ReactElement => {
        return (
            <>
                <label>{label}<input type="radio" value={value} name="radio"/></label>
            </>
        )
    }

    return (
        <>
            <label><span>{label}</span>
                <div className="radio-buttons">
            {
                points.map((button: FormRadioElement, index: number) => {
                    return <RadioButton {...button} key={`${index}${button.label}`}/>
                })
            }
                </div>
            </label>
        </>
    );
};
