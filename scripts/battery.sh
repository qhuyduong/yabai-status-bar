#!/usr/bin/env bash

yabai=/usr/local/bin/yabai
jq=/usr/local/bin/jq

LEVEL=$(pmset -g batt | egrep '([0-9]+\%).*' -o --colour=auto | cut -f1 -d'%')
STATUS=$(pmset -g batt | grep "'.*'" | sed "s/'//g" | awk '{print $4}')

echo $(cat <<EOF
{
  "level": "$LEVEL",
  "status": "$STATUS"
}
EOF
)
