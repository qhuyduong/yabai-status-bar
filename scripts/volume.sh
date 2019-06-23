#!/usr/bin/env bash

LEVEL=$(osascript -e 'output volume of (get volume settings)')
MUTED=$(osascript -e 'output muted of (get volume settings)')

echo $(cat <<EOF
{
  "level": "$LEVEL",
  "muted": "$MUTED"
}
EOF
)
