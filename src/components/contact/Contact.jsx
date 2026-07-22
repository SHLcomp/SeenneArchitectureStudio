import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact noise">

      <span className="eyebrow">Contact</span>

      <h1 className="headline">
        Let's Design Something Extraordinary
      </h1>

      <p className="intro">
        Whether you're planning a private residence, a hospitality project,
        or a commercial development, we'd love to hear about your vision.
      </p>

      <form>

        <div className="row">

          <div className="field">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="Your Email" />
          </div>

        </div>

        <div className="row">

          <div className="field">
            <label>Project Type</label>

            <select>
              <option>Residence</option>
              <option>Commercial</option>
              <option>Hospitality</option>
              <option>Interior Design</option>
            </select>
          </div>

          <div className="field">
            <label>Budget</label>

            <select>
              <option>Under $100k</option>
              <option>$100k - $500k</option>
              <option>$500k+</option>
            </select>
          </div>

        </div>

        <div className="field">
          <label>Project Details</label>

          <textarea
            rows="6"
            placeholder="Tell us about your project..."
          />
        </div>

        <button className="cta1">
          Send Inquiry
        </button>

      </form>

    </section>
  );
};

export default Contact;