import React, {ReactElement} from 'react';
import {FormElement} from "../../../types";

export const InputField: React.FC<FormElement> = ({label}: FormElement): ReactElement => {
    return (
        <>
            <label><span>{label}</span><input type="text" defaultValue=""/></label>
        </>
    );
};
