 
// App.jsx
import React from 'react';
import BannerComponent from './BannerComponent';
import ExhibitComponent from './ExhibitComponent';

const App = () => {
  return (
    <div className="app">
      <BannerComponent title="Site Title" />
      <ExhibitComponent heading="Example Exhibit">
        {/* Child components can go here */}
        <p>This is some content for the exhibit.</p>
      </ExhibitComponent>
    </div>
  );
};

export default App;

