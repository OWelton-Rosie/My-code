 <p>Click the button below to display the date and time.</p>
    <button type="button" onclick="document.getElementById('demo').innerHTML = Date()">
      Click me to display the Date and Time!
    </button>
    <p id="demo"></p>
    
    <h3>Onclick alert button</h3>
    <button onclick="myFunction()">Click me!</button>
    <script>
      function myFunction() {
        alert("Congratulations, you have clicked me!");
      }
    </script>
    
    <aside>
      <h3>Here, have a <u>(not functional)</u> form:</h3>
      <form action="/submit_form" method="post" aria-label="form">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Eg; John Doe" required aria-required="true"><br><br>

        <label for="email">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="Eg; name@example.com" required aria-required="true"><br><br>
        
        <label for="message">Your Message:</label><br>
        <textarea id="message" name="message" rows="5" cols="40" placeholder="Write your message here..." required aria-required="true"></textarea><br><br>
        
        <input type="submit" value="Submit">
        <input type="reset" value="Clear">
      </form>
