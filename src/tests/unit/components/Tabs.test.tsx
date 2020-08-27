import React from 'react';
import {mount} from 'enzyme';
import {Tabs, Tab} from "../../../components";

describe('<Tabs/>', () => {

    let wrapper: any;
    beforeEach(() => {
        wrapper = mount(
            <Tabs>
                <div title="Config">
                </div>
                <div title="Result">
                </div>
            </Tabs>);
    });

    it('<Tabs/> should has one active tab', () => {
        expect(wrapper.find('.tabs__item--active').html()).toMatch(/Config/);
    });

    it('<Tabs/> should have two tab', () => {
        expect(wrapper.find('.tabs__item').length).toBe(2);
    });

    it('<Tabs/> should get two children', () => {
        expect(wrapper.prop('children').length).toBe(2);
    });

    it('Should have two Tab components', function () {
        expect(wrapper.find(Tab).length).toBe(2);
    });
});
