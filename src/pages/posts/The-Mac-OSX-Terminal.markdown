---
intro: true
featured: true
title: "Bash and OSX Terminal"
uniqueID: "bashAndTheTerminal"
description: "The OSX terminal is where you use bash commands to perform actions in your operating system. Understanding your OS is the first layer to programming."
shortName: "💻"
banner: "/images/posts/bash.jpg"
date: 2014-01-11
tags: ["osx", "terminal", "bash", "shell"]
---

## OSX Terminal

The OSX command prompt is a place where you can type commands to manipulate files on your computer or launch programs that perform complex tasks.

In some ways the command prompt is the simplest kind of computer interface. You are probably more familiar with interfaces that have windows and buttons, but the command prompt is an interface entirely driven by text input. Type a command. The command is performed. You are prompted to enter another command.

Yes, it is that simple.

Writing a program for the command prompt is much easier than writing a program with a graphical interface (windows and buttons). So much easier, in fact, that the majority of programs written today are written for the command prompt. This is why learning to use the command prompt will open up a whole new world for you. You will have access to a vast array of programs and technologies that were previously off-limits.

## Getting Started
Hold down the `⌘` key and press `space`. In the spotlight prompt, enter `Terminal`. Under Applications, you should see a `Terminal` application. Open it.


When its open, hold ⌘ and press N at the same time (`⌘ + N`). In the new window, you should see `yourMacBookUser$`.

In my Terminal, I see:

```bash
~ shossain$
```

The prompt begins with a series of words and symbols and ends with the dollar symbol.

By default on OSX, the first word is the name of your computer. In my case, my computer is named `batBook`. Your computer name is probably something different. You can change your computer’s name by clicking the `Edit` button under `Computer Name` in `System Preferences` > `Sharing`.

On the prompt, after the computer name, is a colon and then the current working directory. The working directory is the folder where commands that you enter on the command prompt will be executed. The word directory is programmer speak for folder. To see the full path of the current working directory at any time, you can type:

```bash
pwd
```

Followed by the `Enter` key. `pwd` stands for Print Working Directory. If you were to type this at the command prompt now you would see something like:

```bash
/Users/shossain
```

Which happens to be the full path to your home folder. By default when you open a new Terminal window on OSX the working directory will be set to your home folder. The current user’s home folder has a shorthand on the command prompt: the tilde character (`~`). This is why you currently see the tilde in the prompt itself.

The last word of the prompt (before the dollar sign) is your OSX username. In my case my username is `shossain`.

Let’s cover a couple of basic commands.

### Listing Files

You can see the files in the current directory with the `ls` command. Give it a try. Type:

```bash
ls
```

Followed by the `Enter` key. You should see something like the following output:

```bash
Applications/
Desktop/
Documents/
Downloads/
Library/
Sites/
Pictures/
Music/
Movies/
```

Think of `ls` is short for list. Or, list the files in the current folder. Folders are shown with a trailing slash character (`/`). Files are shown with their full file name. In this case, “Hello World.doc” includes the file extension “.doc”.

### Going into Folders
You can change the working directory with the cd command. The `cd` command stands for Change Directory (directory is a folder).

Let’s give it a try. Type:

```bash
cd Documents
```

And press `Enter`. The `cd` command takes one “argument”. An argument is a string of characters that the command operates on. In this case, we pass the cd command the name of the new working directory.

Let’s use the `pwd` command that we learned above to see if that worked. Type:

```bash
pwd
```

and press `Enter`. You should now see something like:

```bash
/Users/shossain/Documents
```

Stellar! We are moving around. This is just like double clicking on a folder in Finder. Also note how the prompt has changed:

```bash
~/Documents shossain$
```

It now shows the new directory that we are currently in (Documents).

### Moving Around
There is another shortcut that is helpful when navigating folders with the command prompt. If you want to go from the folder that you are in to the containing folder, you can use the `..` shortcut. The `..` shortcut always refers to the containing folder, no matter where you are in the file system.

For example if you are in your home directory:

```bash
cd ~
```

In most cases `~` refers to the home directory. So my directory after `pwd` is:

```bash
/Users/shossain
```

Now if you type:

```bash
cd ..
```

And then:

```bash
pwd
```

You should see, be in:

```bash
/Users
```

### Paths

You can also use a full path in the cd command. For instance, typing:

```bash
cd /Applications/Utilities
```

Will change the current directory to the `Applications` > `Utilities folder`.

You should notice that folders in a path are separated by slashes `/` — much like URLs. To get to the root directory for the computer, you only need to type:

```bash
cd /
```

The root directory is the topmost, or highest folder. When you go here, it’s like navigating all the way up to your hard drive (“Macintosh HD”) in Finder.

Paths that begin with a slash `/` are absolute paths. Absolute paths are relative to the root directory. All other paths are assumed to be relative to the current working directory.

This is true in all cases, except one. If you begin a path with a tilde (`~`) it is always assumed to be relative to the current user’s home directory. So typing:

```bash
cd ~/Documents
```

Will switch to the current user’s Documents folder.

### Navigation

If you need to switch back to a directory that you were just in there is another shortcut that you can use. If you pass a dash (`-`) to the cd command it is the command prompt equivalent of hitting the Back button in Finder (or in a web browser for that matter).

So if you are in your Documents directory:

```bash
cd ~/Documents
```

And you switch over to the Applications directory for a second:

```bash
cd /Applications
```

You can return to the Documents directory by typing:

```bash
cd -
```

Now the `pwd` command will reveal:

```bash
/Users/shossain/Documents
```

And here’s the kicker: the dash always refers to the previous working directory. So if you type it one more time:

```bash
cd -
```

The `pwd` command will reveal:

```bash
/Applications
```

Typing it again would put you back in your Documents directory. And so on…

### Tab completion

At first glance learning to navigate your filesystem in this manner may seem like a lot of extra typing, but there is one other trick that comes to our aid here: tab completion!

The modern command prompt allows you to type the first few letters of a file or directory name followed by the `Tab` key to complete it.

For example, if you are in your home directory:

```bash
cd ~
```

And you type:

```bash
cd Doc (Tab)
```

It will automatically complete the word for you so that it becomes:


```bash
cd Documents
```

Pretty nifty, eh?

But what happens when there is more than one possibility for completion? You should here a beep or tone when you press `Tab` the first time. If you press `Tab` again it will list the possible completions for you.

So typing:

```bash
cd Do (Tab) (Tab)
```

Would output:

```bash
Documents/ Downloads/
```

You could then add a `c` to narrow the completion possibilities to “Documents” and press `Tab` again to complete it. Give it a try to see what I mean.

But tab completion isn’t just limited to file names and directories. You can also use it to complete commands.

For example, if you typed:

```bash
who (Tab) (Tab)
```

You would see:

```bash
who  whoami  whois
```

This is because there are three commands that begin with “who”: `who`, `whoami`, and `whois`.

This is, of course, extremely helpful when you’ve forgotten the precise name of an obscure command.

### Getting help

There are a couple of ways to get help on a specific command. The first is to pass the help flag. A flag is a special argument that tells a program or command to do something specific. For most programs the help flag is either `-h`, `--help`, or just help. Some programs (like the gem command) support all three flags, some support only one, and some do not provide help information at all. Figuring out which one you need is often a process of trial and error.

So if you needed to get help on the gem command, you could type:

```ruby
gem --help
```

This will output a help message that will include a description and usage information about the program:

If a program or command doesn’t respond to one of the help flags, you can sometimes get help using the man command. In fact, the man command will generally yield much more comprehensive documentation on a command than a help flag. man is a kind of digital manual for your computer. To use it, simply pass the name of the command that you would like help with as the first argument. For example, you can type:

```bash
man mkdir
```

To reveal the “man” page for the `mkdir` command (the `mkdir` command allows you to create new directories). There are a number of other commands that can be used to find help information on specific commands and programs, including `info` and `apropos`, use `man` to find out more about them.

### Additional commands

OSX ships with literally hundreds of commands and programs that run on the command prompt. Far too many to explain in this brief intro. Here’s a small list of additional commands:

| Command | Purpose |
| --- | --- |
| cat | Outputs the contents of a file to the command prompt. |
| mkdir | Creates a new directory (a folder). Pass the -p flag to create every directory in a given path. |
| open | Opens a file with the associated program, a directory with Finder, or a URL with the default web browser. |
| ps | List all running processes. Very handy for seeing if a background program is still running. |
| kill | Terminate an existing process. Pass the process ID of a given process to terminate it. You can find the process ID in the first column of the output of the ps command. |
| rm | Permanently deletes a file. Be careful with this one. Files deleted with this command do not go to the OSX Trash. Instead they are deleted immediately. Pass the -rf flag to remove folders with files |
| rmdir | Removes a directory (a folder). Again, be careful. Directories deleted with this command do not go to the Trash. They are deleted immediately. |

Again, use `man` to learn more about each command.
