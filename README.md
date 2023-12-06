# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project has been deployed on the site (https://siddharthdhumal-showtabledata.netlify.app/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### Folder Structure

In the src folder, there are two main folders, components and model. The model folder has a model.ts file which provides an interface to data given by API.
The components folder has Button, Modal, deleteModal,editModal, and mainTable folders.
1) The button folder has a Button.tsx file which has the functionality of buttons and is used to provide a component composition to other buttons in the project.
2) The Modal folder has a Modal.tsx file which has the functionality of a Modal and is also used to provide a component composition to other modals. Here **createProtal  is used which is react-dom property.**
3) The deleteModal folder has a Deletemodal.tsx file which has the functionality to delete records from a table. It has two buttons cancel and confirm.
The cancel button will cancel to delete the selected row. and the confirm button will delete the record from the table.
4) The editModal folder has a editModal.tsx file which has the functionality to edit records from a table. It has two buttons cancel and confirm.
The cancel button will cancel to edit the selected column and the save button will edit the record from the table. Here **useReducer react hook is used in order to update the edited values.**
5) The mainTable folder has MainTable.tsx file which has the functionality to **fetch the data from API using Axios.**
6) Also different useState hooks have been used in order to render the modal according to situations.
7) For styling the components **css modules have been used for each component.**
8) The site is deployed on Netlify and the link is given below.
9) ( https://siddharthdhumal-showtabledata.netlify.app/ )

