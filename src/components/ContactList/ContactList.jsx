import PropTypes from "prop-types";
import scss from "./ContactList.module.scss";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={scss.list}>
    {contacts.map((contact) => (
      <li className={scss.item} key={contact.id}>
        {contact.name + " : " + contact.number}
        {
          <button
            className={scss.button}
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
          >
            Delete
          </button>
        }
      </li>
    ))}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
