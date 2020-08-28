import React from 'react';
import {shallow} from 'enzyme';
import {InputField} from "../../../../components/FormResult/FormElements";

describe('<InputField/>', () => {
    it('Should render input', function () {
        const data = { label : "Input", type: '' };
        const component = shallow(<InputField {...data}/>);
        expect(component.find("span").html()).toContain(data.label);
    });
});
