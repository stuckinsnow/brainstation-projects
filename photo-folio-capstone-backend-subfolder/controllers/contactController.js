const knex = require('knex')(require('../knexfile'));

const indexContact = (_req, res) => {
  knex('contact')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving photos: ${err}`);
    });
};

const submitContactForm = async (req, res) => {
  try {
    console.log(req.body);
    const { email, subject, content } = req.body;
    await knex('contact').insert({ email, subject, content: content || '' });
    res.status(200).json({ message: 'Success!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error' });
  }
};


const getContact = async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await knex('contact').where({ id }).first();

    if (contact) {
      res.json(contact);
    } else {
      res.status(404).json({ error: 'Contact not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    await knex('contact').where({ id }).del();
    res.status(200).json({ message: 'Contact deleted successfully' });
    console.log('Comment deleted');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  indexContact,
  getContact,
  submitContactForm,
  deleteContact,
};
