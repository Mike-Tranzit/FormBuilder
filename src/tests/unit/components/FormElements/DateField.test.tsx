import React from 'react';
import {shallow} from 'enzyme';
import {DateField} from "../../../../components/FormResult/FormElements";

describe('<DateField/>', () => {
    it('Should render input[type="date"]', function () {
        const data = { label : "Date", type: '' };
        const component = shallow(<DateField {...data}/>);
        expect(component.find("span").html()).toContain(data.label);
    });
});
