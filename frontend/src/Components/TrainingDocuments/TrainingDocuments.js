import React from 'react';
import AdminHeader from '../AdminDashboard/AdminHeader/AdminHeader';
import Back from './Back/Back';
import Form from './Form/Form';
import DocumentTable from './DocumentTable/DocumentTable';
import { useState, useEffect } from 'react';
import axios from 'axios';
function TrainingDocuments(props) {
  const [fileItems, setFileItems] = useState([]);
  let DefaultValue;
  console.log(props);

  useEffect(() => {
    StartUpDefaults();
    return () => {
      setFileItems([]);
    };
  }, []);
  async function StartUpDefaults() {
    let ApiUrl =
      'http://localhost:5000/api/task/getdefaults/?initialize=StartupInitiation';
    DefaultValue = await axios.get(ApiUrl);

    console.log(DefaultValue.data);
    setFileItems(DefaultValue.data);

    return;
  }
  return (
    <div className='training'>
      <Back page='/trainingdocuments' />
      <AdminHeader
        style={{ marginTop: '1rem', padding: '1rem', borderTopColor: 'white' }}
        className='doc-header'
        title='Training Documents'
      />
      <Form item={props} />
      <DocumentTable fileItems={fileItems} setFileItems={setFileItems} />
    </div>
  );
}

export default TrainingDocuments;
