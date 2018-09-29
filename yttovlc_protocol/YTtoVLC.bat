:: This batch script takes the input and removes 12 characters from the front, and then launches VLC with that altered
:: input set as the file path
set vlcdata=%1
"C:\Program Files\VideoLAN\VLC\vlc.exe" --qt-minimal-view --no-video-title-show "%vlcdata:~12%"