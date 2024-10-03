#!/bin/bash

# Get the directory of the current script
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Navigate to the `out` folder relative to the script's location
cd "$SCRIPT_DIR/out" || exit

# Start the HTTP server on port 8080 (or any preferred port)
http-server -p 8080 &

# Wait a few seconds to ensure the server starts
sleep 2

# Open the default browser to http://localhost:8080
if command -v xdg-open >/dev/null; then
  xdg-open http://localhost:8080
elif command -v open >/dev/null; then
  open http://localhost:8080
elif command -v start >/dev/null; then
  start http://localhost:8080
else
  echo "Please manually open your browser and navigate to http://localhost:8080"
fi
