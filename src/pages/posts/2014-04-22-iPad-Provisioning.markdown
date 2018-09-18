---
layout: post
intro: true
featured: false
title: "iPad Provisioning"
description: "Provision any Apple Device with the Apple Configurator. This exercises covers managing inventory and accessiblity."
banner: "/images/posts/ipad.jpg"
date: 2014-04-22 13:41:36
tags: ["appleconfigurator", "provisioning", "ios"]
---

## Getting Started

This exercise was created to asses the technical skills and capacity of professional candidates, interested in entry-level positions. Responsibilities include Provisioning iPads, debugging issues, reporting and high-level testing. Use the requirements provided to "provision" an iOS device for testing, sales, etc.

### Requirements

1. Update to the latest version of OS X
2. On your device, update the latest version of iOS
3. [Terminal](/2014/04/20/The-Mac-OSX-Terminal.html) and [Git](/2014/04/14/Git-On-OSX.html).
4. Download the required files via Git or [download](https://bitbucket.org/sajjadhossain/provisioningfiles/get/6c48ad766a82.zip) direct zip.

```bash
git clone https://sajjadhossain@bitbucket.org/sajjadhossain/provisioningfiles.git
```

5. iOS applications under test. For security reasons I removed my personal signed applications but you can use your own to download the below from iTunes or App Store.

6. **Download the Applications on the iPad.**
7. **Backup all applications and settings to Mac via iTunes before Factory Reset**.
8. Then see [how to find my iOS Applications](http://osxdaily.com/2011/12/15/where-ios-apps-stored-locally-in-mac-os-x-and-windows/).


### Objective
Your task is to use the [Apple Configurator Requirements](/2014/04/22/Apple-Configurator-Requirements.html), and iTunes to  install/side-load the above applications, profiles and files respectively to the iOS device.

#### Part 1: Backup to iTunes, Reset & Provision
Given that you have a used iPad, with an existing profile, cache and applications:

| Step | Summary | Expected Result |
| --- | --- | --- | --- |
| 1 | Backup the device in iTunes | iPad is backed up |  
| 2 | Factory Reset the device via settings | iPad undergoes hard reset |  
| 3 | Plug device in to Mac | "Prepare" tab found a "New" device. |  

Use the above to express any issues that arise. **This process will take a very long time, if it is the first time the device is being provisioned through Apple Configurator...**

#### Part 2: Restore and Clone
In Apple Configurator, create a backup of the device, newly supervised from Part 1, and use the back up to restore another iPad (Part 1).

| Step | Summary | Expected Result |
| --- | --- | --- | --- |
| 1 | Backup the device in Apple Configurator | iPad is backed up |  
| 2 | Factory Reset the device via settings | iPad undergoes hard reset |  
| 3 | Plug device in to Mac | "Prepare" tab found a "New" device. |  
| 4 | Restore this device from the new "Profile" | Device should be restored |

Use the above to express any issues that arise.

#### Part 3: Reporting
Use the iPad(s). Use the apps. Test the configurations you set. How is it that you know that the profiles were installed successfully? In a report-like fashion, list some of the defects and discoveries you've stumbled upon during use of the applications and software. List what you think the root issues of the bugs and experiences are. For instance, *The password prompt occurs because...*

**Example:**

| Step | Test Summary | Expected Result | P/F |
| --- | --- | --- | --- |
| 1 | Turned on iPad after Provisioning | User is prompted to enter a password of "X" specifications | P/F |

Ask yourself what happens and why you think it happens. How did you ensure that the Profiles are being respected? How did you confirm that the files are in the respected locations?

Your report should include high-level use cases you executed in a checklist fashion to ensure that the installed (Part 1) profiles are being respected and that restore works as expected (Part 2).
