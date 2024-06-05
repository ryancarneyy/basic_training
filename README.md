# Installing NPM and create-react-app

IF YOU RUN INTO PROBLEMS AT ANY POINT IN YOUR INSTALLATION AND SETUP:

1. Use the web (I find ChatGPT is the most useful) to figure out what is wrong.
2. If this doesn't work, reach out to me at ryancarney771@ucla.edu and hopefully I can help you figure it out before our session


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
- In the bottom left of your window, you will see x 0 ! 0, click on it.
  - This should open up a window within your VSCode
- At this top of this window, you might see 4 buttons,
  - Problems, Debug Console. Output, and Terminal
- Click on terminal
  - This simulates the apple terminal or windows command prompt that we were working with earlier.
- After in the terminal, enter the command:

  npx create-react-app project_namepp

- If you see a bunch of files + directories get added to your folder, run:

  cd project_name   // This will change into your projects directory (cd -> change directory)
     		    
- This will then create some starter code for a React website. Run:

  npm start

- This will then launch your app on a local host in your default browser. You should see something like this:



- If all of these steps work and you have a working React website, congrats! I am excited to start you guys on your web development mission!