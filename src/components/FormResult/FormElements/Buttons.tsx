import React, {ReactElement} from 'react';
import {FormButton} from "../../../types";

type FormButtons = {
    buttons: FormButton[]
}

export const Buttons: React.FC<FormButtons> = ({buttons}: FormButtons): ReactElement => {

    const Button: React.FC<FormButton> = ({label, type, clickHandler}: FormButton): ReactElement => {
        return (
            <>
                <button className="config-form__btn" onClick={(e) => {
                    e.preventDefault();
                    clickHandler();
                }}>{label}</button>
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
