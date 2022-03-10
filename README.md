
## Binary Bingo 

**Summary**
- React.js Front End
- Antd Component Library
- HTML, CSS, JS based frameworks.

**Features**
- Simple web based UI
- Generating random numbers
- Dynamic UI components 
- Decimal to binary conversion
- Used in educational setting

**How to Play**

Teacher uses the Draw page.

![Image 1](https://github.com/Bailym/BinaryBingo/blob/main/images/BinaryBingo%201.png)

Teacher clicks the draw button to generate a random 4 bit binary number.

![Image 1](https://github.com/Bailym/BinaryBingo/blob/main/images/BinaryBingo%202.png)

Students use the Card page which gives them four random numbers to tick off when they are called. (The student will need to convert the binary number to denary)

![Image 1](https://github.com/Bailym/BinaryBingo/blob/main/images/BinaryBingo%203.png)

Students can click the box to mark it as called.

![Image 1](https://github.com/Bailym/BinaryBingo/blob/main/images/BinaryBingo%204.png)

Repeat until a student ticks off all four numbers or no more numbers can be called.

![Image 1](https://github.com/Bailym/BinaryBingo/blob/main/images/BinaryBingo%205.png)


## To start project:
Navigate to the project directory in a terminal window. 

`cd BinaryBingo`

`npm start`

## File Structure
- create-react-app handles the initial file structure.

- node_modules - Holds all of the required modules for the app. (if you dont have a node_modules folder run 'npm install'. DO NOT PUSH THIS FOLDER TO GITHUB, USE THE .gitignore to exclude it.)

- public - contains any project assest (images, logos, icons etc.)

- src - front end React files. (the actual pages of the app.)

- package.json - project config - dont worry about it until you have to :)

- package.lock - similar to above - dont touch it unless you have to.


## Inside the src folder (front end files)
- index.js is always the first page to be shown.

- any smaller components (things that are contained within another page/component) should go in a components folder.





