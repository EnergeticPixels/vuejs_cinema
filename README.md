### Cinema
this is the result of a follow-along course from Udemy.com. 
Project Overview/Setup    
Setup Components   
Filters    
Refactoring with single file components            
Getting data from API     
Displaying session times  
Component comms with event bus
Creating the Detail Page
Adding the day selector
Adding tooltips
Finishing touches       
    Much more time needed to grasp concepts and methologies.

This project is a little more advanced than the Poster Store project from the Udemy video training series.  More robust development of a SPA with VueJS.

Mr. Gore has updated this course to combat OMBDB's API and data no longer being 'free'.  He has included some sample data to play with.

Below is Mr. Gore's original readme contents.


# Ultimate Vue.js Developers Course

Source code for the [Ultimate Vue.js Developers Course](http://bit.ly/2mPK8ny).

### Project 2: Vue.js Cinema

#### Demo

See the completed project here: [http://vuejs-cinema.vuejsdevelopers.com/](http://vuejs-cinema.vuejsdevelopers.com/)

#### Pre-installation

- Ensure [NPM](https://docs.npmjs.com) and [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) are installed on your system


#### Installation

1. Install this code on your local system
 
    **Option 1 (recommended)**
    
    1. Fork this repository (see top right corner)
    2. Clone the forked repository on your local file system
    
        ```
        cd /path/to/install/location
        
        git clone git@github.com:[your_username]/vuejs-cinema.git
        ```
    
    **Option 2 (easier)**
    
    This option is better if you're not a Github user or are not sure how to setup SSH keys
    
    ```
    cd /path/to/install/location
    
    git clone https://github.com/vuejsdevelopers/vuejs-cinema.git
    ```    
   
2. Install dependencies

    ```
    npm install
    ```

3. Create a `.env` file by copying the sample

    ```
    cp .env_sample .env
    ```
    
    Edit the .env file and replace any variables if needed
    
4. Start project

    ```
    npm run start
    ```

Your site will be available at *localhost:[PORT]* where `PORT` is whatever value is set in your `.env` file.

#### Lecture branches

Note that branches in the repo named `lecture/xxx` correspond to course lectures.

