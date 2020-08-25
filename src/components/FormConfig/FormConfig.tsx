import React, {ReactElement, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setFormConfig} from '../../store/actions/formActions';
import {State} from '../../store/reducers/formReducer';
import {JSONchecker} from '../../helpers/JSONchecker';
import './FormConfig.css';

export const FormConfig: React.FC = (): ReactElement => {
    const rows = 25;
    const textareaRef = useRef<HTMLTextAreaElement>(null!); // TODO

    const dispatch = useDispatch();
    const selectStateHandler = (state: State) => JSON.stringify(state.formConfigData, null, 2);
    const formConfigData = useSelector(selectStateHandler);

    const submitButtonHandler = (): void => {
        const {value: valueOfTextarea } = textareaRef.current;
        const result = new JSONchecker(valueOfTextarea).correctElements().inspectResult();
        if(result) {
            dispatch(setFormConfig(result));
        } else {
            alert('не валидный JSON');
        }
    };

    return (
        <div>
            <form className="config-form" action="#">
                <textarea ref={textareaRef} className="config-form__textarea" name=""
                          defaultValue={formConfigData}
                          rows={rows} />
                <button className="config-form__btn" type="button" onClick={submitButtonHandler}>Apply</button>
            </form>
        </div>
    );
};
