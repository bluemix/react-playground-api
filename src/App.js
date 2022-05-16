import './App.css';
import DescriptionTabView from './components/tabs/DescriptionTabView';
import React from 'react';
import LoadingView from './components/loading_view/LoadingView';
import ExpandableView from './components/expandable/ExpandableView';
import PropTypes from 'prop-types';

const DescriptionTab = ({serviceId}) => {
  return (
    <LoadingView
      url={`https://reqres.in/api/users/${serviceId}?delay=1`}
      // url={`https://reqres.in/api/unknown/${serviceId}?delay=1`}
      successView={DescriptionTabView}
    />
  )
}

DescriptionTab.propTypes = {
  serviceId: PropTypes.number.isRequired,
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExpandableView initiallyExpanded={true} view={ DescriptionTab({serviceId: 1}) } title='Details'/>
        <ExpandableView initiallyExpanded={false} view={ DescriptionTab({serviceId: 2}) } title='Price'/>
        <ExpandableView initiallyExpanded={false} view={ DescriptionTab({serviceId: 3}) } title='Screenshot'/>
      </header>
    </div>
  );
}

export default App;
