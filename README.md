# Visual Studio Code

- Visual Studio Code is an IDE (Integrated Development Environment) which is used to write, edit, debug, and run your code.
- This is one of the most popular IDEs used today, because of it's simple but robust nature.

# Installing Visual Studio Code

- Check out https://code.visualstudio.com/docs/setup/setup-overview in order to install the correct version of VSCode for your device!

# Installing NPM and create-react-app

There are many tutorials on youtube as well if you would like to follow them instead,
but this tutorial will ensure that you have started a base react project that we can use interactively in class!

IF YOU RUN INTO PROBLEMS AT ANY POINT IN YOUR INSTALLATION AND SETUP:

1. Use the web to figure out what is wrong. There are many good guides online!
2. Use the web some more (maybe youtube this time, or some AI to figure out your problem), you got it!


- First, go to Node.js in your browser, then navigate to the Downloads tab
- Choose "I want the": mose recent LTS version for your respective OS and processor

  - Checking what processor you have:
  
    - Windows:
      - Press Win + R to open the Run dialog box.
      - Type msinfo32 and press Enter to open the System Information window.
      - In the System Information window, look for the "Processor" entry under "System Summary." This entry will display information about your processor, including its name, architecture, and speed.

    - macOS:
      - Click on the Apple menu () in the top-left corner of your screen.
      - Select "About This Mac" from the dropdown menu.
      - In the About This Mac window, click on the "System Report" button.
      - In the System Information window, navigate to "Hardware" > "Processor" to view information about your processor, including its name, speed, and number of cores.

- Once installed, run in command prompt or terminal:

  - node -v
    - shows version of node and verifies that it is installed
  - npm -v
    - shows version of npm and makes sure it's installed

- After making sure that node and npm are installed, we need to install create-react-app:

  - in terminal/cmdprompt:

    - npm install -g create-react-app
      - -g installs it globally to your system, not just your current directory.

# Creating a base react app

- Go onto your desktop and make a folder
- Open VSCode or IDE of your choice and choose the folder you just created
  - In VSCode, on the Welcome page, there is an "Open..." button. This is where you go to open your folder
- In the bottom left of your window, you will see x 0 ! 0, click on it.
  - This should open up a window within your VSCode
- At this top of this window, you might see 4 buttons,
  - Problems, Debug Console. Output, and Terminal
- Click on terminal
  - This simulates the apple terminal or windows command prompt that we were working with earlier.
- After in the terminal, enter the command:

  npx create-react-app project_name

- If you see a bunch of files + directories get added to your folder, run:

  cd project_name   // This will change into your projects directory (cd -> change directory)
     		    
- This will then create some starter code for a React website. Run:

  npm start

- This will then launch your app on a local host in your default browser. You should see something like this:



- If all of these steps work and you have a working React website, congrats! I am excited to start you guys on your web development mission!
- We will be using this default create-react-app code as an example for your first lesson, so feel free to skim over it in order to get somewhat familiar!
- Also, within this github repository, I have attached my actual example code that I will be showing you guys! Check it out if you wish, but we will also be going over it and how it all works in class.

# Extra Preparation or More Practice

- Here is a great tutorial from React in order to learn how to use the Library!

https://react.dev/learn/tutorial-tic-tac-toe


# Installing Git

- Github has provided a great tutorial on instaling git, along with some information on some of the most common git commands! 

https://github.com/git-guides/install-git

- PLEASE install git when you get the chance, and if you have time look into what Git is and some of the base commands! This will only help with our future lessons.