import React from 'react';
import {shallow} from 'enzyme';
import {TextareaField} from "../../../../components/FormResult/FormElements";

describe('<TextareaField/>', () => {
    it('Should render textarea', function () {
        const data = { label : "Textarea", type: '' };
        const component = shallow(<TextareaField {...data}/>);
        expect(component.find("span").html()).toContain(data.label);
    });
});
