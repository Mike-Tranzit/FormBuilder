import React, {useState, ReactElement} from 'react';
import {TabsProps} from '../../types';
import {Tab} from "../";
import './Tabs.css';

export const Tabs: React.FC<TabsProps> = ({children}: TabsProps): ReactElement => {

    const {
        props: {
            title: initialActiveTab
        }
    } = children[0];

    const [activeTab, setActiveTab] = useState<string>(initialActiveTab);

    const onClickHandler = (tab: string): void => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs">
            <ol className="tabs__list">
                {children.map((child: ReactElement) => {
                    const { title } = child.props;
                    return (<Tab
                            key={title}
                            title={title}
                            activeTab={activeTab}
                            onClickHandler={onClickHandler}
                        />);
                })
                }
            </ol>
            <div className="tabs__content">
                {children.map((child: ReactElement) => {
                    const {title: tabTitle, children} = child.props;
                    if(tabTitle !== activeTab) return null;
                    return children;
                })}
            </div>
        </div>
    );
};

