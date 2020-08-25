import React, {ReactElement} from 'react';
import {FormTitle} from '../../../types/index';

export const Title: React.FC<FormTitle> = ({title}: FormTitle): ReactElement => {
    return (
        <>
            <div className="title">{title}</div>
        </>
    );
};
