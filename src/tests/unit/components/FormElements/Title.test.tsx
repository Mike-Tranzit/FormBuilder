import React from 'react';
import {shallow} from 'enzyme';
import {Title} from "../../../../components/FormResult/FormElements";

describe('<TextareaField/>', () => {
    it('Should render title', function () {
        const title = "Title";
        const component = shallow(<Title title={title}/>);
        expect(component.find(".title").html()).toContain(title);
    });
});
