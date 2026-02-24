@echo off
set GIT="C:\Users\DELL\AppData\Local\GitHubDesktop\app-3.5.4\resources\app\git\cmd\git.exe"
%GIT% pull origin main --allow-unrelated-histories --no-edit
%GIT% add -A
%GIT% commit -m "Fix-Jenkinsfile-docker-driver" --allow-empty
%GIT% push origin main
