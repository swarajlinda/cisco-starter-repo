 
// App.jsx
import React from 'react';
// import BannerComponent from './BannerComponent';
// import ExhibitComponent from './ExhibitComponent';
import IPDisplayComponent from './IPDisplayComponent';
const App = () => {
  return (
    <div className="app">
    {/*
      <BannerComponent title="Site Title" />
      <ExhibitComponent heading="Example Exhibit">  */}
        {/* Child components can go here */}
           {/* 
        <p>This is some content for the exhibit.</p>
      </ExhibitComponent>
      */}
      <div className="container">
        <IPDisplayComponent ipAddressType="ipv4" />
      </div>
      <div className="container">
        <IPDisplayComponent ipAddressType="ipv6" />
      </div>
    </div>
  );
};

export default App;

