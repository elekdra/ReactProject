import React, { useState } from 'react';
import Back from '../TrainingDocuments/Back/Back';

// import { PDFReader } from 'react-read-pdf';
import './UploadFile.css';
function UploadFile(props) {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);

  function SaveFileToServer(fileToLoad, fileName, company, training, version) {
    console.log(fileName);
    console.log(fileToLoad);
    console.log(company);
    console.log(training);
    console.log(version);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
      }
    };
    xhttp.open('PUT', 'http://localhost:5000/api/task/filesave', true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(
      JSON.stringify({
        fileName: fileName,
        fileContent: fileToLoad,
        Company: company,
        Training: training,
        Version: version,
      })
    );
  }

  const fileToBase64 = (file, cb) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(null, reader.result);
    };
    reader.onerror = function (error) {
      cb(error, null);
    };
  };

  const uploadFiletoServer = () => {
    if (
      document.getElementById('upload-file').files < 1 ||
      !document.getElementById('upload-file').validity.valid
    ) {
      return;
    }
    fileToBase64(
      document.getElementById('upload-file').files[0],
      (err, result) => {
        if (result) {
          setFile(result);

          setFileName(document.getElementById('upload-file').files[0]);
        }
      }
    );
    let company = document.querySelector('#company').value;
    let version = document.querySelector('#version').value;
    let training = document.querySelector('#training').value;
    let FileName = document.getElementById('upload-file').files[0].name;
    SaveFileToServer(file, FileName, company, training, version);
  };

  return (
    <div>
      <div className='back-arrow'>
        <Back page='/dashboard' />
      </div>
      <div className='file-upload-container'>
        <div style={{ paddingTop: '1em' }}>Training *</div>
        <div>
          <select
            id='company'
            name='company'
            defaultValue={props.company}
            required
          >
            <option value='HPCL'>HPCL</option>
            <option value='IOCL'>IOCL</option>
            <option value='GRK'>GRK</option>
            <option value='BPL'>BPL</option>
          </select>
        </div>
        <div style={{ paddingTop: '1em' }}>Version</div>
        <div>
          <input
            type='text'
            defaultValue={props.version}
            id='version'
            required
          />
        </div>
        <div style={{ paddingTop: '1em' }}>Company *</div>
        <div>
          <select
            style={{ width: '20%' }}
            id='training'
            name='training'
            defaultValue={props.training}
            required
          >
            <option value='file management'>file management</option>
            <option value='process management'>process management</option>
            <option value='security management'>security management</option>
            <option value='device management'>device management</option>
          </select>
        </div>
        <div style={{ paddingTop: '1em' }}>Required Minimum Version *</div>
        <div>
          <input type='text' required />
        </div>
        <div style={{ paddingTop: '1em' }}>Select Files To Upload *</div>

        <label className='fileContainer'>
          <div>
            <input
              className='uploadfilebox'
              type='file'
              style={{ borderStyle: 'dashed', width: '18em' }}
              id='upload-file'
              accept='application/pdf'
              required
            />
          </div>
        </label>
        <div>
          <button className='uploadbutton' onClick={uploadFiletoServer}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadFile;
