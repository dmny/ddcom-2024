export default function Contact() {
    return (

      <div className="container">
        <div className="contact">

          <form action="action_page.php">
            <h2>CONTACT</h2>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

            <label htmlFor="email">Email</label>
            <input type="text" id="lname" name="lastname" placeholder="Your email address.." />

            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height:200 }}></textarea>

            <input type="submit" value="SUBMIT" />
          </form>

      </div>
    </div>

    )
  }