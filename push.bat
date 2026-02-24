@echo off
set GIT="C:\Users\DELL\AppData\Local\GitHubDesktop\app-3.5.4\resources\app\git\cmd\git.exe"
%GIT% config pull.rebase false
%GIT% pull origin main --no-edit
%GIT% add -A
%GIT% commit -m "Fix-Jenkinsfile-docker-driver" --allow-empty
%GIT% push origin main
