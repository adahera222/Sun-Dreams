#include <windows.h>
#include <hge.h>

HGE *hge = 0;

bool FrameFunc()
{

 return true;
}

int WINAPI WinMain (HINSTANCE,
                    HINSTANCE,
                    LPSTR,
                    int)

{
  hge = hgeCreate(HGE_VERSION);
  hge->System_SetState(HGE_WINDOWED, true);
  hge->System_SetState(HGE_FRAMEFUNC, FrameFunc);
  hge->System_SetState(HGE_TITLE, "HGE Tutorial");

if(hge->System_Initiate())
  {
    hge->System_Start();
  }
  else
  {	
    MessageBox(NULL, hge->System_GetErrorMessage(), "Error",
               MB_OK | MB_ICONERROR | MB_SYSTEMMODAL);
  }

  hge->System_Shutdown();
  hge->Release();

  return 0;
}
