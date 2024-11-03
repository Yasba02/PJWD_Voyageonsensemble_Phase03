
# Voyageons-ensemble

# PJWD_Phase03
Voyageons ensemble project is a university project of the course : "Java and Web Development". Voyageons ensemble was created with node.js and includes a database connection.


## **Table of Contents**
- [Prerequisites](#Prerequisites)
- [Installation](#installation)
- [Database Configuration](#DatabaseConfiguration)
- [Usage](#usage)
     - [User registration](#Userregistration)
     - [User authentification](#Userauthentification)
     - [Comment](#Comment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [References](#References)

## **Prerequisites**
- Make sure you have installed Mariadb and configured it successfully ( You have a user account with a username and a password).
- Make sure you have installed Node.js
- Make sure you have installed Git
- Make sure you have installed HeidiSQL if managing the database via a GUI (This step is optional)

## **Installation**
To install and run this project on your local machine, follow these steps:

1. Open your terminal and clone the project repository.
2. Navigate into the project folder and install the required Node.js dependencies.
3. Open Mariadb or HeidiSQL, and create a database named voyageonsensemble.
4. Import and run the setup.sql script located in the scripts directory.
5. Configure the server and ensure that all necessary environment variables and configurations are properly set.


## **Database Configuration**

1. Navigate to the root and search for a .envtest file and copy it.
2. Create a new .env file in the Index directory, where you will paste the copied file.
3. Replace the placeholders with your test database connection details as explained in the .envtest
4. Run the application using : node index.js or nodemon index.js if you have nodemon installed.
5. Once the server is running, visit the following link in your browser: http://localhost:3000

## **Recommended IDE setup**
VScode

## **Project Structure**
```
.
├── docs_phase3 # Screencast and additional documents for the university
│ └── PJWD_Screencast.mov # Screencast that demonstrates functionality of the application
├── public # Static files served directly by the server
│ ├── images # where all the images used in the application are stored
│ 
├── scripts # Scripts to run to set up the databases
│ ├── setup.sql
├── Index
│ ├── index.js
├── node_modules
├── route
│ ├── comment.js
│ ├── route.js
├── views
│ ├── homepage.ejs
├── index.html
├── Aboutus.html
├── Aboutus.Signin.html
├── Africa.html
├── Algierarticle.html
├── America.html
├── Asia.html 
├── Australiaarticle.html
├── Baliarticle.html
├── Californiaarticle.html
├── cotactus.html
├── contactUs.Signin.html
├── Dubaiarticle.html
├── Egyptarticle.html
├── Europe.html
├── Hikingarticle.html
├── Homepage.html
├── Login.html
├── Japanarticle.html
├── Login.html
├── Maldivesarticle.html
├── Milanoarticle.html
├── Moroccoarticle.html
├── newyorkarticle.html
├── Niagarafallsarticle.html
├── Oceania.html
├── Parisarticle.html
├── publish.html
├── Publish.Signin.html
├── Safariarticle.html
├── SignIn.html
├── Switzerlandarticle.html
├── package.json
├── package-lock.json
├── LICENSE.txt # License file
├── README.md # This file
└── PJWD_Screencast_Phase03.mp4
```

## **Usage**
Voyageons ensemble is a travel blog, where travelers share articles about their experiences with the website administration, after approval the articles can be published to the public on behalf of the writers. The website supports commenting system to enable communication between readers and authors, or between readers themselves. You can watch a screencast that demonstrates how to navigate in the website in PJWD_Screencast_Phase03.mp4

## **User registration**
In order to get the access to read the articles users must first click on "Sign in" button and register in the website, by providing a name, email-address and a password. Using an API the email-address is checked if it really exists or not. 
Upon to successfull registartion the user will be redirected to the home page where they can start navigating and reading articles of different countries, grouped together by continent. The contact page provides contact informations and social media accounts of the blog, while the publish page provides contact information for authors who want to publish their articles in the blog.

## **User authentification**
If an account has aleady been created, the user can directly click on log in and enter the registered email and password. If the entered credentials are correct the user will be redirected to the homepage with access to the entire website content.

## **Comment**
At the buttom of each article, users have a space where they can write their thoughts, questions and opinions in the comment box, and posting it after filling the name box too. 
Readers can also read the comments that other users have left in the comments list.

## **Contributing**
This project is currently not available for contribution, it's a university project. 
However feel free to explore the code and learn from it.

## **License **
This project is under MIT License. See the License file for more details.
>>>>>>> 571b1756bd695f1ac6f5e2f0833983dc9a66b5e3

## **References **
Anita. 2 days itinerary in Algiers – see all the highlights. Time travel Bee. https://timetravelbee.com/places/2-days-itinerary-in-algiers/
Adamc. Is winter a good time to visit Australia ? Ultimate travel. https://www.ultimate.travel/our-blog/is-winter-a-good-time-to-visit-australia/
Hannah and Nick. Tegalalang Rice Terrace at Ubud, Bali. Salt in our hair. https://www.saltinourhair.com/bali/tegalalang-rice-terraces-ubud/
Tina, C(2024). Take a road trip up California’s wild North Coast. Visit California. https://www.visitcalifornia.com/now/take-road-trip-california%E2%80%99s-wild-north-coast/
Aryan, S(2024). Explore the enchanting beauty of Dubai in July in 2024. Trvael Triangle. https://traveltriangle.com/blog/dubai-in-july/
Anita. The ultimate guide to visiting the pyramids of Giza. The blonde abroad. https://www.theblondeabroad.com/ultimate-egypt-travel-guide/
Tommy S(2024). Best Sunrise hikes. Wild land trekking. https://wildlandtrekking.com/blog/best-sunrise-hikes/
My tokyo travel guide. Natural born feeder. https://naturalbornfeeder.com/my-tokyo-travel-guide/
Nomadic(2024). My in-depth guide to experiencing the maldives on a budget. 
Matt. https://www.nomadicmatt.com/travel-blogs/maldives-budget-travel/
Aurelie and Yann(2023). What to do in Milano in 3 days. Amoureux du monde. https://amoureux-du-monde.com/en/italy/what-to-do-in-milan-in-3-days/
Amanda, M. Everything you need to know before visiting Rabat. Maroc mama. https://marocmama.com/what-you-need-to-know-to-visit-rabat/
Kritika, G. My first time in new york city – blog of the things. Tripoto. https://www.tripoto.com/new-york/trips/my-first-time-in-new-york-city-blog-of-the-things-595f37ae9e87e
Karolane, L(2024). Visit Niagara falls in 24 hours. Authentik Canada. https://www.authentikcanada.com/en/blog/visit-niagara-falls-in-24-hours
Aurelie. Visiting Paris : The essentials.
Hannah, S(2024). Aquila Safari Review – The closest Safari to Cape Town ! The Cape Town Blog. https://thecapetownblog.com/aquila-safari/
Sara, W(2024). Likeside Bliss Hiking Zermatt's Scenic 5 lake trail. Magic Switzerland. https://www.magicswitzerland.com/blog/lakeside-bliss-hiking-zermatts-scenic-5-lake-trail/

