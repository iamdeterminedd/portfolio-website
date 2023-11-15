import emailpic from '../assets/email.png';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <form className="contact-form-container">
        <div className="contact-title">
          <img src={emailpic} className="contact-img" />
          <h2 className="contact-heading text-center">Get in touch</h2>
        </div>
        <p className="contact-subtitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
          earum.
        </p>
        <div className="form-sub-container">
          <label htmlFor="name" className="contact-label">
            <span>Name</span>
            <input
              type="text"
              name="from_name"
              className="contact-input"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-sub-container">
          <label htmlFor="email" className="contact-label">
            <span>Email</span>
            <input
              type="email"
              name="from_email"
              className="contact-input"
              required
            />
          </label>
        </div>

        <label htmlFor="message" className="contact-label">
          <span>Message</span>
          <textarea
            type="text"
            name="message"
            rows="8"
            className="contact-input"
          />
        </label>

        <div>
          <input
            className="btn submit-btn btn-primary"
            type="submit"
            value="Send Message"
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
