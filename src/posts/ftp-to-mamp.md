---
date: "2017-08-31"
slug: "ftp-to-mamp"
title: "FTP TO MAMP LOCALHOST ON MACOS"
---

… because other articles I’ve found on the topic are years old and out-of-date.

On macOS Sierra, running local servers via MAMP, and wanting to connect to servers using my FTP client. Yes, I know I can copy files into localhost via Finder, but I have my reasons.

- Go System Preferences => Sharing.
- Enable Remote Login.
- You will see:

Remote Login: On
To log in to this computer remotely, type “ssh username@xxx.xxx.x.xx”.

In your FTP client, create a new SFTP connection with the settings:

Server: xxx.xxx.x.xx  
User Name: username  
Password: your user password for the system  
The connection will dump you into the user folder, so if you want the Remote Path to start you someplace specific, here are some examples:

- Desktop
- Documents
