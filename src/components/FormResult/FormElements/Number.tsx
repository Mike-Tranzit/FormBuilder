import React, {ReactElement} from 'react';
import {FormElement} from "../../../types";

export const Number: React.FC<FormElement> = ({label}: FormElement): ReactElement => {
    return (
        <>
            <label><span>{label}</span><input type="number" /></label>
        </>
    );
};
