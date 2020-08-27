import React, {ReactElement} from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import formReducer from "../../../store/reducers/formReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {FormResult} from "../../../components";
import settings from '../../fixtures/settings.json';
import * as Elements from "../../../components/FormResult/FormElements";
import {FormButtons, FormElement, FormRadioElement} from "../../../types";

const AppWrapper = () => {
    const store = createStore(formReducer, composeWithDevTools());
    return (
        <Provider store={store}>
            <FormResult/>
        </Provider>
    )
};

jest.mock('../../../helpers/StateHandlers', () => ({
    selectResultStateHandler: jest.fn(() => {
        return require('../../fixtures/settings.json');
    })
}));

describe('<App/>', () => {
    let component: any;

    type ConcatFormElements = React.FC<FormButtons> | React.FC<FormElement> | React.FC<FormRadioElement>;

    function checkLengthOfElements(element: ConcatFormElements) {expect(component.find(element).length).toEqual(1);}

    beforeEach(() => {
        component = mount(<AppWrapper/>);
    });


    test('Form should have title', () => {
        const {title} = settings;
        expect(component.find('.title').html()).toContain(title);
    });

    test('Form should have buttons', () => {
        checkLengthOfElements(Elements.Buttons);
    });

    test('Form should have radio group', () => {
        checkLengthOfElements(Elements.Radio);
    });

    test('Form should have data input[type="date"]', () => {
        checkLengthOfElements(Elements.DateField);
    });

    test('Form should have input[type="text"]', () => {
        checkLengthOfElements(Elements.InputField);
    });

    test('Form should have input[type="number"]', () => {
        checkLengthOfElements(Elements.Number);
    });

    test('Form should have input[type="checkbox"]', () => {
        checkLengthOfElements(Elements.Checkbox);
    });

    test('Form should have textarea', () => {
        checkLengthOfElements(Elements.TextareaField);
    });
});
