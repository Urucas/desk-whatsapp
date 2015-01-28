#! /bin/bash
grunt

cp src/icon.icns build/Whatsapp/osx/Whatsapp.app/Contents/Resources/nw.icns
./build/Whatsapp/osx/Whatsapp.app/Contents/MacOS/node-webkit ./ --debug
