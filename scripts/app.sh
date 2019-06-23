#!/usr/bin/env bash

yabai=/usr/local/bin/yabai
jq=/usr/local/bin/jq

APP=$($yabai -m query --windows --window)

if [ $? -eq 0 ]; then
    echo $APP | $jq .app
fi
