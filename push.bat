@echo off
set GIT="C:\Users\DELL\AppData\Local\GitHubDesktop\app-3.5.4\resources\app\git\cmd\git.exe"
%GIT% add -A
%GIT% commit -m "Fix-merge-conflicts-in-Jenkinsfile"
%GIT% push origin main
