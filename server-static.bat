@echo off
setlocal enabledelayedexpansion

REM Set the working directory to the location of this script
cd /d "%~dp0"

REM Define the name of the project folder (this will always stay the same)
set "PROJECT_FOLDER=AAPEX-V1"

REM Define the absolute path to mongoose.exe
set "MONGOOSE_PATH=%cd%\mongoose.exe"

REM Check if mongoose.exe exists in the current directory
if not exist "%MONGOOSE_PATH%" (
    echo Error: mongoose.exe not found in the directory "%cd%"
    echo Please ensure mongoose.exe is located in the same folder as this script.
    pause
    exit /b
)

REM Define the relative document root directory
set "DOCUMENT_ROOT=%cd%"

REM If the document root contains a subfolder with the same name as the project folder, adjust path
if exist "%cd%\%PROJECT_FOLDER%" (
    set "DOCUMENT_ROOT=%cd%\%PROJECT_FOLDER%"
)

REM Define a fixed port number to avoid confusion
set "PORT=8000"

REM Start Mongoose server using the dynamically determined document root
echo Starting Mongoose HTTP server on port %PORT%...
start "" "%MONGOOSE_PATH%" -l http://0.0.0.0:%PORT% -d "%DOCUMENT_ROOT%"
timeout /t 5 >nul

REM Check if mongoose.exe is running
tasklist | findstr /i "mongoose.exe" >nul
if %ERRORLEVEL% NEQ 0 (
    echo Error: Mongoose did not start correctly. Check for errors.
    pause
    exit /b
)

REM Open the site in the default browser on the correct port
start "" http://localhost:%PORT%

REM Inform user about server status
echo Server started at http://localhost:%PORT% serving directory "%DOCUMENT_ROOT%"
pause
