import React from 'react';
import {Tabs, FormConfig, FormResult} from './components';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="container">
            <Tabs>
                <div title="Config">
                    <FormConfig />
                </div>
                <div title="Result">
                    <FormResult />
                </div>
            </Tabs>
        </div>
    );
}

export default App;
