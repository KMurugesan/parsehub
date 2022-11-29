/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import './App.css';
import BreadCrumbs from './BreadCrumbs';
import { mockBreadCrumbs } from './mock';
import Visible from './Visible';

const App = () => {
  const [crumbs, setCrumbs] = useState([...mockBreadCrumbs['home']]);
  const [child, setChild] = useState({ ...mockBreadCrumbs['home'][0].children});

  const handleCrumbClick = (id) => {
    // axios({
    //   method: 'get',
    //   url: '',
    // })
    //   .then((response) => {
    //     setCrumbs([ ...response.data ]);
    //   });

    // mocking the data as I haven't added BE code.

    const response = mockBreadCrumbs[id];
    if(response) {
      setCrumbs([ ...response ]);
      setChild({ ...response[response.length - 1].children });
    }
  };

  return (
    <>
      <BreadCrumbs breadCrumbItems={crumbs} handleCrumbClick={handleCrumbClick} />
      <div style={{ display: 'block', margin: '50px' }}>
        <Visible when={child}>
          <a 
            className="link"
            onClick={() => handleCrumbClick(child.id)} >
            {child.message}
          </a>
        </Visible>
      </div>
    </>
  )
};

export default App;
