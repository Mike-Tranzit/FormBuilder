import React from 'react';
import {mount} from 'enzyme';
import {Radio} from "../../../../components/FormResult/FormElements";

describe('<Radio/>', () => {
    it('Should render radio group', function () {

        const data = {
            label: 'Radio',
            type: '',
            points: [
                {
                    label: 'One',
                    value: 1
                },
                {
                    label: 'Two',
                    value: 2
                }
            ]
        }

        const component = mount(<Radio {...data}/>);
        expect(component.find("input[type='radio']").length).toBe(2);
    });
});
