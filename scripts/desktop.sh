#!/usr/bin/env bash

yabai=/usr/local/bin/yabai
jq=/usr/local/bin/jq

CURRENT_WORKSPACE=$($yabai -m query --spaces --space)
WORKSPACES=$($yabai -m query --spaces --display)

echo $(cat <<EOF
{
  "workspaces": $WORKSPACES,
  "active": $CURRENT_WORKSPACE
}
EOF
)
