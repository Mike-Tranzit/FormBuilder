import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {FormConfig} from "../../../components";
import {createStore} from "redux";
import formReducer from "../../../store/reducers/formReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const AppWrapper = () => {
    const store = createStore(formReducer, composeWithDevTools());
    return (
        <Provider store={store}>
            <FormConfig/>
        </Provider>
    )
};

describe('<FormConfig/>', () => {
    let component: any;
    window.alert = jest.fn();

    beforeEach(() => {
        component = mount(<AppWrapper/>);
        jest.resetAllMocks();
    });

    const setTextareaValue = (value: string): void => {
        const textarea =  component.find('.config-form__textarea');
        textarea.instance().value = value;
        textarea.simulate('change');
    };

    const findButtonAndClick = (): void => {
        component.find('button.config-form__btn').simulate("click");
    }

    it('Should have Apply button', function () {
        expect(component.find('button.config-form__btn').html()).toMatch(/Apply/);
    });

    it('Should call alert', function () {
        setTextareaValue("false");
        findButtonAndClick();
        expect(window.alert).toHaveBeenCalled();
    });

    it('Should"t call alert', function () {
        setTextareaValue("{id: 1}");
        findButtonAndClick();
        expect(window.alert).not.toHaveBeenCalled();
    });
});
