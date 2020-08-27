import React from 'react';
import {shallow} from 'enzyme';
import {Tab} from "../../../components";
import {TabType} from "../../../types";

describe('<Tab/>', () => {

    const setProps = (...props: any[]): TabType => ({
        title: props[0],
        activeTab: props[1],
        onClickHandler: props[3]
    } as TabType);

    it('<Tab/> should have correct title', function () {
        const props = setProps('Config', 'Config', () => {});
        const component = shallow(<Tab {...props}/>);
        expect(component.find('li').html()).toMatch(/Config/);
    });

    it('<Tab/> should have active class', function () {
        const props = setProps('Config', 'Config', () => {});
        const component = shallow(<Tab {...props}/>);
        expect(component.find('li').hasClass('tabs__item--active')).toBeTruthy();
    });

    it('<Tab/> should have\'t active class', function () {
        const props = setProps('Config', 'Result', () => {});
        const component = shallow(<Tab {...props}/>);
        expect(component.find('li').hasClass('tabs__item--active')).toBeFalsy();
    });
});
