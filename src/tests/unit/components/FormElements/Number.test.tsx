import React from 'react';
import {shallow} from 'enzyme';
import {Number} from "../../../../components/FormResult/FormElements";

describe('<InputField/>', () => {
    it('Should render input[type="number"]', function () {
        const data = { label : "Number", type: '' };
        const component = shallow(<Number {...data}/>);
        expect(component.find("span").html()).toContain(data.label);
    });
});
