import { Component } from "react";
import PropTypes from "prop-types";
import scss from "./ContactForm.module.scss";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
    console.log(name);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit({ ...this.state });
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={scss.form}>
        <label className={scss.label}>Name</label>
        <input
          className={scss.input}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />

        <label className={scss.label}>Number</label>
        <input
          className={scss.input}
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />

        <button className={scss.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
