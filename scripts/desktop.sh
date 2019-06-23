#!/usr/bin/env bash

yabai=/usr/local/bin/yabai
jq=/usr/local/bin/jq

$yabai -m query --spaces --space | $jq .index
