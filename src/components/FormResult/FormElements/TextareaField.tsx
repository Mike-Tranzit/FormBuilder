import React, {ReactElement} from 'react';
import {FormElement} from "../../../types";

export const TextareaField: React.FC<FormElement> = ({label}: FormElement): ReactElement => {
    return (
        <>
            <label><span>{label}</span><textarea cols={10} rows={5}/></label>
        </>
    );
};
