import React from 'react';
import {shallow} from 'enzyme';
import {Checkbox} from "../../../../components/FormResult/FormElements";


describe('<Checkbox/>', () => {
    it('Should render checkbox', function () {
        const data = { label : "Checkbox", type: '' };
        const component = shallow(<Checkbox {...data}/>);
        expect(component.find("span").html()).toContain(data.label);
    });
});
