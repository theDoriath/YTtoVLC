# Youtube to VLC (Chrome extension)
This is a chrome extension which adds a button under a youtube video, that let's you open it in VLC player.
Since you can't open programs on a host machine using javascript in a browser, you need to use a custom protocol for that. 

## How the extension works
Clicking the button sends the youtube video link using the yttovlc protocol to Windows. Windows then runs the .bat or the .exe file, which then strips the link of the prepended protocol characters and runs VLC player with the link. The .bat and .exe are doing the same thing, so you can use either of them, however there is one difference. Both of the files are opening the command line and the command line is opened until VLC player is closed, but .exe opens it in background, which the .bat cannot do. In the .bat however you can change parameters for VLC player if you want. Default parameters are `--qt-minimal-view --no-video-title-show`

## Installation
1. Install ["Youtube to VLC" Chrome extension](https://chrome.google.com/webstore/detail/youtube-to-vlc/lflbkonfkbdffndjdncfnnnjimnokfke "Youtube to VLC Chrome extension").
2. Download and merge the .reg file to create a yttovlc protocol. You can use either [YTtoVLC_bat.reg](https://raw.githubusercontent.com/theDoriath/YTtoVLC/master/yttovlc_protocol/YTtoVLC_bat.reg) or [YTtoVLC_exe.reg](https://raw.githubusercontent.com/theDoriath/YTtoVLC/master/yttovlc_protocol/YTtoVLC_exe.reg)
   1. (Optional) If your VLC installation is not in default folder, you need to edit the .reg file first.
3. Download [.bat](https://raw.githubusercontent.com/theDoriath/YTtoVLC/master/yttovlc_protocol/YTtoVLC.bat) or [.exe](https://github.com/theDoriath/YTtoVLC/raw/master/yttovlc_protocol/YTtoVLC.exe) depending on which .reg file you merged.
   1. (Optional) If you want to use .bat file, you can edit it to change the parameters with which to run VLC player.
4. Move the .bat or .exe file to your VLC folder.
   1. (Optional) If your VLC installation is not in default folder, or you don't want the file to be in VLC folder, edit the .reg file and merge it again.
