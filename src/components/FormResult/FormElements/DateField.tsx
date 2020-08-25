import React, {ReactElement} from 'react';
import {FormElement} from "../../../types";

export const DateField: React.FC<FormElement> = ({label}: FormElement): ReactElement => {
    return (
        <>
            <label><span>{label}</span><input type="date" name="" /></label>
        </>
    );
};
