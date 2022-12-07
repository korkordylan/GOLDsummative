# Programming Gold Summative 

How to access the web server:

1) Run the Code through a Web Server

2) Open Terminal or Shell : type python -m http.server 5500

Access through http://127.0.0.1:5500 and navigate through the directory of your files.

The website was an inspiration from a dataset on Kaggle, Carnegie Museum of Arts' Collection Dataset, there were a total of 28269 unique artworks, of which all were used.The website was built upon the Bootstrap Framework and I used variations of the Navigation Bar, Carousell, Grid System, Containers and Form Submission to create the framework of the website.

The purpose of the website would be to emulate the Carnegie Museum of Arts and showcase some of the artworks in the Carnegie Musueum of Arts collection records of which I chose 18, to make the website look realistic, I found some of the exhibitions currently exhibited in the musueum, showing the duration of the exhibitions. 

To style the website, I used CSS in a seperate CSS file to style the website. To manipulate the dataset to show a visualisation of the data, I used a function in Javascript to iterate through the classification column in the CSV file to show the number of each unique classification of artworks currently in the CMOA Public Collection Records through a bar chart using D3.

This bar chart is interactive as when your mouse is hovered over each bar, the value of unqiue entities are shown. Finally I created a function which is linked to the Register button to make the website more interactive by sending an alert when a user signs up for the mailing list. All my citations are at the bottom of my index.html file cited in Harvard Referencing. 

After finishing all this, I used JSDOC to document all the functions, parameters and objects used and are in a seperate out file. ESLint test was applied to fix errors and quality issues.

