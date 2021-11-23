import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import filter from '../../../assets/filter.png';
import upload from '../../../assets/upload.png';

function Form(props) {
  console.log(props);
  const dataForm = useRef(null);
  var fullData = props.fileItems;
  console.log(fullData);
  function filterTheListsss() {
    console.log(fullData);
  }

  function handleChange() {
    props.item.setTraining(document.querySelector('#training').value);
    props.item.setCompany(document.querySelector('#company').value);
    props.item.setVersion(document.querySelector('#version').value);
  }
  return (
    <form ref={dataForm}>
      <div className='data-form'>
        <div>
          <div>Company</div>
        </div>
        <div>
          <div>Version</div>
        </div>
        <div>
          <div>Training</div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div>
            <select id='company'>
              <option value='HPCL'>HPCL</option>
              <option value='IOCL'>IOCL</option>
              <option value='BPL'>BPL</option>
              <option value='GRK'>GRK</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <input type='text' id='version' />
          </div>
        </div>
        <div>
          <div>
            <select id='training'>
              <option value='file management'>file management</option>
              <option value='process management'>process management</option>
              <option value='security management'>security management</option>
              <option value='device management'>device management</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <button
              type='reset'
              className='filter-button'
              onClick={filterTheListsss}
            >
              <img src={filter} alt='' />
              <span>Filter</span>
            </button>
          </div>
        </div>
        <div>
          <div>
            <Link
              to='/uploaddocument'
              className='upload-button'
              onClick={handleChange}
            >
              <img src={upload} alt='' />
              <span>Upload</span>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
