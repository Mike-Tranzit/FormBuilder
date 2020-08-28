import React from 'react';
import {mount} from 'enzyme';
import {Buttons} from "../../../../components/FormResult/FormElements";
import {FormButtons} from "../../../../types";

describe('<Button/>', () => {
    it('Should render button', function () {

        const {buttons} = {
            buttons: [
                {
                    label: 'Ok',
                    type: 'reset'
                }
            ]
        } as FormButtons;

        const component = mount(<Buttons buttons={buttons}/>);
        expect(component.find(".config-form__btn").length).toBe(1);
    });
});
