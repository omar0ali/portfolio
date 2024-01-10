import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <div class="contact">
      <form method="POST" action="https://formspree.io/f/mnqyyoak">
          <input type="text" name="Name" placeholder="Your Name" required>
          <input type="email" name="Email" placeholder="Your Email" required>
          <textarea id="subject" style="height: 40%; resize: none;" name="Message" rows="6"
              placeholder="Your Message"></textarea>
          <button style="color: white; width: 100%; " type="submit">Submit</button>
      </form>
      <span id="msg"></span>
    </div>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Contact Info</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{email[0]}}</td>
    </tr>
    <tr>
      <td>{{email[1]}}</td>
    </tr>
  </tbody>
</table>
  `,
  styles: `
  button:hover {
    background: #0b5394;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

button {
    border: 1px solid #a85d74;
    padding: 14px 50px;
    cursor: pointer;
    transition: background 0.5s;
    transition: box-shadow 300ms;
    border-radius: 5px;
    font-size: 18px;
}
  button {
    background-color: #2a2a2a;
    border: none;
    color: white;
    width: 200px;
    padding: 10px 22px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
}

    .contact {
    margin-top: 10px;
    border-radius: 5px;
    background-color: #6fa8dc;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
input[type=text],
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

input[type=email] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}
  `
})
export class ContactComponent {
  email:Array<string> = ["bajunaidomar@outlook.com", "bajunaidomar@gmail.com"]
}
