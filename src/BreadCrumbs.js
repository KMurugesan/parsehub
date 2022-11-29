/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import Visible from './Visible';
import './BreadCrumbs.css';
import './App.css';

const BreadCrumbs = ({ breadCrumbItems, handleCrumbClick }) => {
  return (
    <>
      <Visible when={breadCrumbItems.length > 0}>
        <div className="breadcrumbs flex-row">
          {breadCrumbItems.map(({ id, message, url }, index) => (
            <>
              <div className="items flex-row">
                <a
                  id={id}
                  // href={url}
                  className={index !== breadCrumbItems.length - 1 ? "link" : ""}
                  onClick={() => handleCrumbClick(id)}
                >
                  {message}
                </a>
                <div style={{ paddingLeft: '10px' }}>
                   {" -> "}
                </div>
              </div>
            </> ))}
          </div>
      </Visible>
      <Visible when={breadCrumbItems.length < 1}>
        <p>There are no breadCrumbs to display</p>
      </Visible>
    </>
  )
};

export default BreadCrumbs;
