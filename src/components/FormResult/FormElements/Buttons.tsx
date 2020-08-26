import React, {ReactElement} from 'react';
import {FormButton, FormButtons} from "../../../types";

export const Buttons: React.FC<FormButtons> = ({buttons}: FormButtons): ReactElement => {

    const Button: React.FC<FormButton> = ({label, type = undefined}: FormButton): ReactElement => {
        return (
            <>
                <button className="config-form__btn" type={type}>{label}</button>
            </>
        )
    };

    return (
        <div className="bottom-buttons-container">
            {
                buttons.map((button: FormButton, index: number) => <Button {...button} key={`${index}${button.label}`}/>)
            }
        </div>
    );
};
