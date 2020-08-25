import React, {ReactElement} from 'react';
import {FormElement} from "../../../types";

export const Checkbox: React.FC<FormElement> = ({label}: FormElement): ReactElement => {
    return (
        <>
            <label><span>{label}</span><input type="checkbox" value={1}/></label>
        </>
    );
};
