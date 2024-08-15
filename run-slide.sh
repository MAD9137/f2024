#!/bin/bash

# Check if the correct number of arguments is provided
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <week_number> <slide_number>"
  exit 1
fi

WEEK_NUMBER=$1
SLIDE_NUMBER=$2

# Check if the week number and slide number are valid numbers
if ! [[ "$WEEK_NUMBER" =~ ^[0-9]+$ ]] || ! [[ "$SLIDE_NUMBER" =~ ^[0-9]+$ ]]; then
  echo "Both arguments must be positive integers."
  exit 1
fi

# Define the path to the slides directory
SLIDES_DIR="./docs/modules"

# Construct the path to the Markdown file
FILE_PATH="${SLIDES_DIR}/week${WEEK_NUMBER}/slides/${SLIDE_NUMBER}.md"

# Check if the file exists
if [ ! -f "$FILE_PATH" ]; then
  echo "Slide file not found: ${FILE_PATH}"
  exit 1
fi

# Open the presentation using marp
marp "$FILE_PATH" --html --preview
