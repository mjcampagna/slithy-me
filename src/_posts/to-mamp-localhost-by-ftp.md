---
date: "2019-03-06"
title: "Connecting to MAMP localhost by FTP"
---

... because other articles I’ve found on the topic are years old and out-of-date ...

On macOS, running local servers via MAMP, and wanting to connect to servers using my FTP client. Yes, I know I can copy files into localhost via Finder, but I have my reasons.

- Go System Preferences => Sharing.
- Enable Remote Login.

You will see:

	Remote Login: On  
	To log in to this computer remotely, type “ssh username@xxx.xxx.x.xx”.

In your FTP client, create a new SFTP connection with the settings:

Server: _xxx.xxx.x.xx_  
User Name: _username_  
Password: your user password for the system

The connection will dump you into the user folder.
