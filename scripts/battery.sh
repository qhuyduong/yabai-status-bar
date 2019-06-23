#!/usr/bin/env bash

yabai=/usr/local/bin/yabai
jq=/usr/local/bin/jq

pmset -g batt | egrep '([0-9]+\%).*' -o --colour=auto | cut -f1 -d'%'
