import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBbVr5i98MSwin0oFfeeJCpT_dXECtzOBQ'

// create a new component. This component should produce some html

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

ReactDom.render(<App />, document.querySelector('.container'));