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

For some reason hgetut02.exe is picked up by my antivirus hence I could not push it for some reason. O well not that important.
-Allan

Never mind I am much more comfortable with this engine. Seems nice. It is old but it seems to be powerful.

Make sure to go through the tutorials. They are Visual 6, so they need to be converted but it works fine, just make sure that you place hge.dll in the directory.
-Allan