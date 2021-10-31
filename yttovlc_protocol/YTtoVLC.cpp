#include <cstdlib>
#include <iostream>
#include <windows.h>
#include <string>

using namespace std;

void startup(char* params);

int main(int argc, char* argv[]) {
	SetConsoleTitle("YTtoVLC");
	string strPath = "\"C:\\Program Files\\VideoLAN\\VLC\\vlc.exe\"";

	int protocolStrLen = 11;
	string params(argv[1]);
	string link;

	size_t found = params.find("%20");
	while (found != string::npos) {
		params.replace(found, 3, " ");
		found = params.find("%20");
	}
	params.erase(0, protocolStrLen);
	link = params.substr(0, params.find(' '));
	params.erase(0, link.length() + 1);

	params = strPath + " " + link + " " + params;
	char* fullParams = new char[params.size() + 1];
	copy(params.begin(), params.end(), fullParams);
	fullParams[params.size()] = '\0';

	startup(fullParams);

	return 0;
}

void startup(char* params) {
	STARTUPINFOA si;
	PROCESS_INFORMATION pi;

	ZeroMemory(&si, sizeof(si));
	si.cb = sizeof(si);
	ZeroMemory(&pi, sizeof(pi));

	if (!CreateProcess(NULL, params, NULL, NULL, FALSE, 0, NULL, NULL, &si, &pi)) {
		printf("CreateProcess failed (%d).\n", GetLastError());
		return;
	}

	CloseHandle(pi.hProcess);
	CloseHandle(pi.hThread);
}