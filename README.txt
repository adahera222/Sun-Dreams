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

I slept on the engine, and I believe we should realy do everything with unity which is what we were doing before with my other friend. I think hge is more complicated. What is more interesting to me is making assets and doing things in a fashion that takes less time, and the UNITY engine is going to help us do that. We had already made part of a 3d game with my friend. I will work with him to get git set up and that we we can work with the already made 3d progress we made. In the meanwhile get organized with folders and install unity from http://unity3d.com/unity/download/

OK, well I'll get on that; hopefully 3d won't be a huge pain in the ass... - Edwin