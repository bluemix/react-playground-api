import './App.css';
import DescriptionTab from './components/tabs/DescriptionTab';
import React from 'react';
import LoadingView from './components/loading_view/LoadingView';
import ExpandableView from './components/expandable/ExpandableView';

const DemoView = () => {
  return (
    <>
      <LoadingView url='https://reqres.in/api/users/1?delay=1' successView={ () => (<>hello</>)}>
        {/* <DescriptionTab serviceId={23} data={() => {['a1']}}/> */}
        {/* {DescriptionTab} */}
      </LoadingView>
    </>
    // LoadingView({
    //   url: 'https://reqres.in/api/users/1?delay=1',
    //   // successView: DescriptionTab({ serviceId: 200 }),
    //   callback: (data) => {
    //     // console.log(`data: ${data}`)
    //     // <>Hello</>
    //   }
    // })
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExpandableView initiallyExpanded={true} view={DemoView()} title='Details' />
        <ExpandableView initiallyExpanded={false} view={DemoView()} title='Price' />
        <ExpandableView initiallyExpanded={false} view={DemoView()} title='Screenshot' />
      </header>
    </div>
  );
}

export default App;
