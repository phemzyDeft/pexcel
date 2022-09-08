import React from 'react';
import List from '../api_test/List';
import Note from '../api_test/Note';

function ApiResult(props) {
  return (
    <div className='mt-5 pt-5'>
      {/* <Note /> */}
      <List />
    </div>
  );
}

export default ApiResult;