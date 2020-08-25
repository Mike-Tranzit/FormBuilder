import React, {ReactElement} from 'react';
import {TabType} from '../../../types';

export const Tab: React.FC<TabType> = ({title, activeTab, onClickHandler}: TabType): ReactElement => {

    let className: string = 'tabs__item';

    if (activeTab === title) {
        className += ' tabs__item--active';
    }

    return (
        <li
            className={className}
            onClick={() => onClickHandler(title)}
        >
            {title}
        </li>
    );
};
