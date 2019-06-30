# simpleGuestBook
a guestbook for a webpage using PHP, Javascript, and CSS


This guestbook is set up using an example webpage showing my life's journey in a google maps screen grab
at the bottom of the page an input field asks for a name. This name is sent to a MySql server along with 
a UNIX timestamp.

After the data is saved in the database a success message is displayed
a script is then executed to return to the original webpage

NOTE: this is currently written to be used on a localhost:8000 connection with a localhost:3306 connection for MySql
the password field will need to be filled in

This was tested using:
  php -S localhost:8000
