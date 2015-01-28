#! /bin/bash

if [ -f ./Whatsapp.dmg ]; then
  rm ./Whatsapp.dmg
fi

appdmg appdmg.json ./Whatsapp.dmg
