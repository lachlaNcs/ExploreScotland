# Explore Scotland

You run the API you'll need to install the .NET SDK: \
https://dotnet.microsoft.com/en-us/download/dotnet/8.0

To run the API server from the command line, navigate to /backend/api and run this command:

```
dotnet run --urls "https://localhost:7255"
```

If you get a HTTPS error run this command:

```
dotnet dev-certs https --trust
```

If you have Visual Studio installed, you can open the .sln file, then click the drop down menu for the run button at the top, and choose https and then hit run and it should work.

To run the website, I'd recommend opening the project inside VSCode, and using the Live Server extension, it looks like this: \
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

You should have a button somewhere along the bottom of VSCode that says Go Live, just make sure you have a .html file open and it should launch in your browser. If you don't, right click on the bottom ribbon and tick the box for Live Server (Extension).
