@echo off
setlocal enabledelayedexpansion

REM Set the working directory to the location of this script
cd /d "%~dp0"

REM Define the absolute path to mongoose.exe
set "MONGOOSE_PATH=%~dp0mongoose.exe"

REM Check if mongoose.exe exists in the current directory
if not exist "%MONGOOSE_PATH%" (
    echo Error: mongoose.exe not found in the directory "%~dp0"
    echo Please ensure mongoose.exe is located in the same folder as this script.
    pause
    exit /b
)

REM Define a fixed port number to avoid confusion
set "PORT=8000"

REM Start Mongoose server on the defined port using the absolute path
echo Starting Mongoose HTTP server on port %PORT%...
start "" "%MONGOOSE_PATH%" -listening_port %PORT% -document_root "out"
timeout /t 2 >nul

REM Open the site in the default browser on the correct port
start "" http://localhost:%PORT%

REM Inform user about server status
echo Server started at http://localhost:%PORT%
pause
