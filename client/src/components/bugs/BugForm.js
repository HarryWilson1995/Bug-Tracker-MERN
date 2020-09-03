import React, { useState, useContext } from 'react';
import BugContext from '../../context/bug/bugContext';

const BugForm = () => {
  const bugContext = useContext(BugContext);

  const [bug, setBug] = useState({
    name: '',
    description: '',
    location: '',
    status: 'Open',
    priority: 'Normal',
  });

  const { name, description, location, status, priority } = bug;

  const onChange = (e) => setBug({ ...bug, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    bugContext.addBug(bug);
    setBug({
      name: '',
      description: '',
      location: '',
      status: 'Open',
      priority: 'Normal',
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>Add New Bug</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <h5>Status</h5>
      <select name='status' onChange={onChange}>
        <option value='Open' selected={status === 'Open'}>
          Open
        </option>
        <option value='Ongoing' selected={status === 'Ongoing'}>
          Ongoing
        </option>
        <option value='Delayed' selected={status === 'Delayed'}>
          Delayed
        </option>
        <option value='Overdue' selected={status === 'Overdue'}>
          Overdue
        </option>
        <option value='Completed' selected={status === 'Completed'}>
          Completed
        </option>
      </select>
      <input
        type='text'
        placeholder='Location'
        name='location'
        value={location}
        onChange={onChange}
      />
      <h5>Description</h5>
      <textarea
        name='description'
        cols='30'
        rows='10'
        value={description}
        placeholder='Description'
        onChange={onChange}
      ></textarea>
      <h5>Priority</h5>
      <select name='priority' onChange={onChange}>
        <option value='High' selected={priority === 'High'}>
          High
        </option>
        <option value='Normal' selected={priority === 'Normal'}>
          Normal
        </option>
        <option value='Low' selected={priority === 'Low'}>
          Low
        </option>
      </select>
      <div>
        <input
          type='submit'
          value='Add Bug'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default BugForm;
