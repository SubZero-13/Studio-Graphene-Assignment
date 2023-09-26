import React, { useEffect, useState } from "react";
import "../Styles/contact.css";

function Contact() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Clear the error message for the current input field when it's being edited
    setFormErrors({ ...formErrors, [name]: "" });
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);

    // If there are errors, set them in the state
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Form submission logic goes here
      // For example, you can send the form data to a server
      alert("Form data is successfully sent.");
      console.log(formValues);

      // Reset the form after successful submission
      setFormValues(initialValues);
    }
  };

  useEffect(() => {
    console.log(formErrors);
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.name.trim()) {
      errors.name = "Name is required!";
    }
    if (!values.email.trim()) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.message.trim()) {
      errors.message = "Message is required!";
    }
    return errors;
  };

  return (
    <div className="big-b">
      <div className="big-c">
        <div className="big-c-1">
          <div className="big-c-11">
            <p className="p-1">Newsletter</p>
            <p className="p-2">
              Get news about articles and updates <br /> in your inbox
            </p>
          </div>
          <div className="big-c-12">
            <form onSubmit={handleSubmit} className="form" action="">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="NAME"
                value={formValues.name}
                onChange={handleChange}
                onFocus={() => setFormErrors({ ...formErrors, name: "" })}
              />
              <p className="errorshow">{formErrors.name}</p>

              <br />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="EMAIL"
                value={formValues.email}
                onChange={handleChange}
                onFocus={() => setFormErrors({ ...formErrors, email: "" })}
              />
              <p className="errorshow">{formErrors.email}</p>

              <br />
              <input
                className="input"
                type="text"
                name="message"
                placeholder="MESSAGE"
                value={formValues.message}
                onChange={handleChange}
                onFocus={() => setFormErrors({ ...formErrors, message: "" })}
              />
              <p className="errorshow">{formErrors.message}</p>
              <div className="div-btn">
                <button className="send">SEND</button>
              </div>
            </form>
          </div>
        </div>
        <div className="big-c-2">
          GET <br /> IN TOUCH
        </div>
      </div>
    </div>
  );
}

export default Contact;

