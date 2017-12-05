import React from 'react';

function OrganizationForm (props) {

  const {onSubmit = () => {}} = props;

  const handleSubmit = event => {
    event.preventDefault();
    const {currentTarget} = event;

    const formData = new FormData(currentTarget);
    onSubmit({
      name: formData.get('name'),
      website: formData.get('website'),
      address: formData.get('address'),
      phone: formData.get('phone'),
      user: 21

    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label> <br />
        <input id='title' name='title' />
      </div>

      <div>
        <label htmlFor='body'>Body</label> <br />
        <textarea id='body' name='body' />
      </div>

      <div>
        <input type='submit' value='Submit'/>
      </div>
    </form>
  );
}

export default OrganizationForm;
