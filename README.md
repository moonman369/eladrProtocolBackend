<!-- # eladrProtocolBackend
This is a repo of eladr protocol backend

# How to use.
1)Install ipfs
2)Install nodejs
3)Install mysql
4)Install php myadmin
5)Create a table named eladr
6)Now run this script -->

<!-- GETTING STARTED -->

## Getting Started

This is a repo of eladr protocol backend. To get started, clone this repository to your local machine using the following command

```sh
git clone https://github.com/eduladder/eladrProtocolBackend.git
```

## Installation (Windows)

This is an example of how to list things you need to use the software and how to install them on a **Windows** system.

1. Install **_NodeJS_** v16.14.2 (Recommended) or above, globally on your system.

   1. You can either download the pre-built installer from <a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">**_this website_**</a>.

   2. Or follow alternative installation (local installation) process provided in <a href="https://heynode.com/tutorial/install-nodejs-locally-nvm/" target="_blank"         rel="noopener noreferrer">**_this website_**</a>.

   3. Or, if you already have `nvm` (_Node Version Manager_) installed, simply type in the command

   ```sh
   nvm install --lts
   ```

   \
   To check, if the installation was successful, run the following command

   ```sh
   node -v
   v16.14.2

   npm -v
   8.5.0
   ```

<br/><br/>

2. Install **_IPFS CLI_** v0.16.0 (Recommended) or above on your system.

   1. Change to home directory (C:/Users/<machine_name>) and run the following command.

   ```sh
   cd ~\
   wget https://dist.ipfs.tech/kubo/v0.16.0/kubo_v0.16.0_windows-amd64.zip -Outfile kubo_v0.16.0.zip
   ```

   <br/>

   2. Unzip the file and move it somewhere handy.

   ```sh
   Expand-Archive -Path kubo_v0.16.0.zip -DestinationPath ~\Apps\kubo_v0.16.0
   ```

   <br/>

   3. Move into the kubo_v0.16.0 folder and check that the ipfs.exe works:

   ```sh
   cd ~\Apps\kubo_v0.16.0\kubo
   .\ipfs.exe --version

   > ipfs version 0.16.0
   ```

   <br/>

   4. While you can use IPFS right now, it's better to add ipfs.exe to your PATH by using the following steps. Save the current working directory into a temporary variable:

   ```sh
   $GO_IPFS_LOCATION = pwd
   ```

   <br/>

   5. Create a powershell

   ```sh
   if (!(Test-Path -Path $PROFILE)) { New-Item -ItemType File -Path $PROFILE -Force }
   ```

   <br/>

   6. This command first checks to see if you have a profile set. If you do, it leaves it there and doesn't create a new one. You can view the contents of your profile by opening it in Notepad:

   ```sh
   notepad $PROFILE
   ```

   <br/>

   7. Add the location of your Kubo daemon and add it to PowerShell's PATH by truncating it to the end of your PowerShell profile:

   ```sh
   Add-Content $PROFILE "`n[System.Environment]::SetEnvironmentVariable('PATH',`$Env:PATH+';;$GO_IPFS_LOCATION')"
   ```

   <br/>

   8. Load your $PROFILE

   ```sh
   & $profile
   ```

   <br/>

   9. Test that your IPFS path is set correctly by going to your home folder and asking IPFS for the version:

   ```sh
   cd ~
   ipfs --version

   > ipfs version 0.16.0
   ```

   <br/><br/>

3. Install **_PhpMyAdmin_** (XMAPP Control Panel): <br/>

   1. Go to <a href="https://www.apachefriends.org/">apachefriends.org</a>.

    <br/>
    
    2. Click on **XAMPP for Windows** option to download installer executable file.
        ![image](https://user-images.githubusercontent.com/100613640/197156639-d9ac8833-01e3-419a-af86-82b52cc6f63e.png)
        
        <br/>
    3. Double click on the *.exe* file to start the installation process
    
   <br/>

## Running the Script

1. Setting up the **_IPFS daemon:_**
   <br/>

   1. Open a powershell terminal. Set up IPFS repository before using IPFS for the first time:

   ```sh
   ipfs init
   ```

   <br/>

   2. Start the IPFS daemon

   ```sh
   ipfs daemon
   ```

   <br/><br/>

2. Setting up **_PhpMyAdmin:_**

   1. Start the **XMAPP** application. <br/>

   2. You will see the XMAPP Control Panel <br/>
      ![image](https://user-images.githubusercontent.com/100613640/197160840-ac192dd6-1265-455f-b9b5-c0b9b649a217.png)

   <br/>

   3. Start Apache and MySQL services <br/>
      ![image](https://user-images.githubusercontent.com/100613640/197161418-a86e87ab-86f5-4920-8668-c4cd9e09c2a4.png)

   <br/>

   4. Click on MySQL admin to redirect to PhpMyAdmin webpage <br/>
      ![image](https://user-images.githubusercontent.com/100613640/197162057-b4bad45e-e48a-4bd9-ad3d-9d68dc1ab36e.png)

   <br/>

   5. You're going to be logged in as **_root@localhost_** by default. Set up Login information from the **User Accounts** section. You can also change password from the **Change Password** section. <br/>
      ![image](https://user-images.githubusercontent.com/100613640/197162573-9789f270-d512-472b-a742-66e3b337e88d.png)

   <br/>

   6. Now that your MySQL server is all set up, go to the **Databases** section and create a database. <br/>
      ![image](https://user-images.githubusercontent.com/100613640/197163838-1983eb5f-0353-4fbc-ba7e-1a381e3a1cb4.png)

   <br/><br/>

3. Setting up the **_Environment Variables:_**

   <br/>

   1. Open the local clone of the Eladr Backend Script in a text editor of your choice.

   <br/>

   2. Create a file in the root of the project with the name `.env`

   <br/>

   3. Populate the file with the following required environment variables.

   ```sh
   DB_HOST=127.0.0.1
   PORT=5000
   DB_DATABASENAME=<your_database_name_here>
   DB_PASSWORD=<your_database_password_here>
   DB_USER=<your_username_here>
   ```

   <br/>

   4. Save the file.

   <br/><br/>

4. Running the **_Backend Script:_**<br/>

   1. Start a power shell terminal from VSCode.

   <br/>

   2. To run the script type in the following command

   ```sh
   node app.js
   ```

   <br/>

   3. Wait for sometime...

   <br/>

   4. Eventually you'll see the below Output in the terminal.

   ```sh
   Executing (default): SELECT 1+1 AS result
   Executing (default): SELECT 1+1 AS result
   Connection has been established successfully.
   ```

   This should indicate that the script is running successfully.
