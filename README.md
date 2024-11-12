
```
npm install
```

### INCLUDED TESTS

Performs a simple calculation and verify that the results are correct.  This test takes place completely on the app's home page (i.e. the URL path `"/"`).

### Perform a calculation and convert to "modern" Roman

Performs a calculation in "old" Roman numeral mode (the default) and then clicks the "mdrn" button to convert to "modern" Roman numerals.  

### Register a user 

Test that starts on the app's home page (i.e. the URL path `"/"`) and registers a new user by clicking on the "Register" link at the top of the app, typing a valid email address and password into the registration form, and then clicking the "Register" button.  If registration is successful, the app will automatically redirect you back to the app's home page, where the navbar should be updated to contain a "Login" link instead of the "Register" link. 

### Successful login

Test that logs a user into the app.  

After the user is registered, proceed by clicking on the "Login" link at the top of the app, and then submitting *the same* credentials you provided during the registration step.  If login is successful, the app will automatically redirect you back to the app's home page, where the navbar should be updated to contain three links ("History", "Logout", and "Unregister").  In your test, assert that the redirect takes place and that the navbar is updated to verify that login was successful.

### Calculation history

Test that verifies that a logged-in user's calculation history is successfully recorded.  Specifically, once a user is logged in, each calculation they make will be recorded every time they click the "=" key, and that history can be viewed on the app's "History" page.


### Successful logout

Test that verifies that a logged-in user can successfully logout. Verify that the logout functionality works correctly by clicking the "Logout" link in the navbar.  This will navigate to the "Logout" page, which will log the user out and then automatically (and very quickly) redirect back to the app's home page, where the navbar should be updated to contain only a "Login" link.  

