Sun-Dreams
==========
6/29/12
Included HGE files. I am trying to set everything up so it is linked properly so you can just open the main visual studio file and start coding main.cpp

HGE setup.

http://content.gpwiki.org/index.php/HGE:Tutorials:Setup


6/30/12

I have grown frustrated trying to get the header file hge.h to load. The program loaded into main should load the HGE when done properly. 
Maybe you know better.

What needs to be done is this. Make a Visual Studio project, link hge181/lib/vc for the libraries which should make the the hge.h header file loadable (through properties), disable unicode(also through properties in linker , put to not set), and copy hge.dll to where the executable is output. Should work. Here are some forums http://relishgames.com/forum/index.php?p=/discussion/5678/linker-error-in-visual-studio-express-2010/p1

For some reason hgetut02.exe is picked up by my antivirus hence I could not push it for some reason. O well not that important. If you can find another engine that would be better this 2d one seems kinda old.
-Allan