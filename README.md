Irasutoyer
==========

This is a desktop app for [いらすとや(Irasutoya)](http://www.irasutoya.com/) lovers.  You can search many (3000+) illustrations incrementally and access the illustration page quickly.

- __Cross Platform__: Available on OS X, Linux, (hopefully) Windows.
- __Simplicity__: No configuration is needed.
- __High Performance__: You can see and search the very long (3000+ items) list.

This application is built on [Electron](https://github.com/atom/electron), [React](https://facebook.github.io/react/), [Redux](https://github.com/rackt/redux), and [material-ui](http://www.material-ui.com/#/).

![screenshot on Linux](https://raw.githubusercontent.com/rhysd/ss/master/Irasutoyer/Irasutoyer-linux.png)


## Installation

- [npm](https://www.npmjs.com/) package

```
$ npm install -g irasutoyer electron-prebuilt
$ irasutoyer
```


## Usage

At first start, app automatically scrapes illustration links (spinning the right above circle).
It takes long time (10 minutes or more).  I recommend you to make a cup of coffee and have a break :coffee:.

After scraping succeeds, all illustrations would be listed in window.  You can search incrementally by entering search words to a text area on the top of window.
All links are cached as json in user directory.  If you want to update the cache, click the circle button on right above of the window.

If you find the illustration you want, click the item in list to open illustration page in browser.


## Development

I use Ruby and `rake` for build scripts.

```sh
$ rake dep    # Install dependencies
$ rake build  # Build
$ rake run    # Run application
```
