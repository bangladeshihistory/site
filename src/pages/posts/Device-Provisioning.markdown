---
intro: true
featured: false
title: "iOS Device Provisioning with Apple Configurator"
description: "Provision any Apple Device with the Apple Configurator. Use this guide to provision an iOS device."
shortName: "📱"
banner: "/images/posts/ipad.jpg"
date: 2014-02-22
tags: ["apple-configurator", "provisioning", "ios"]
---

## Apple Configurator

Apple Configurator is a free Mac OS X tool for configuring and deploying iOS devices in the enterprise by using a physical USB connection. The main purpose of the Apple Configurator application is to allow IT administrators configure settings on iPhones and iPads before rolling them out to end users.

The main purpose of the Apple Configurator app is to allow IT administrators configure settings on iPhones and iPads before rolling them out to end users. Administrators can create configuration profiles, import existing profiles from the iPhone Configuration Utility, install specific operating system versions and enforce mobile device security policies.

The Apple Configurator tool also provides some basic mobile device management (MDM) capabilities, including device wipe.

### Abilities

* Wipe (restore) devices and install a specific iOS release
* Update the installed iOS version
* Assign unique names/identifiers to each device
* Backup and/or restore data from an existing backup
* Create and apply configuration profiles
* Install applications (from the public App Store or created for internal use)
* License paid applications using Apple’s Volume Purchase Plan for business or education
* Install documents (documents must be associated with an installed application because iOS doesn’t offer a user-facing file system)
* Assign devices and related configurations to users (users can be populated based on an enterprise directory service like Microsoft’s Active Directory so long as the Mac running Apple Configurator is joined to such a service).
* Organize devices into groups for easier management
* Restrict devices from syncing to other computers
* Assign a organization or user-specific lock screen image
* Create a device check-in/check-out setup that ensure users always have access to their on-device data regardless of whether which device they are assigned (similar to roaming profiles in a Windows business environment where users have the same desktop regardless of which PC they use)
* Enroll devices in a third-party mobile device management (MDM) console for additional capabilities

That’s a pretty good set of tasks that Apple Configurator can handle. The automatic check-in/check-out capabilities are particularly valuable for schools or other environments where the supply of devices like iPads doesn’t match the full user population. This allows a lending library-style approach that ought to work particularly well in elementary schools (it’s essentially an iPad/iOS version of the MacBook carts that Apple has been selling to schools for the past couple of decades). It should also work well in any business that has mobile professionals who only need a device some of the time – sales and marketing jobs come immediately to mind. This entire approach also represents an easy-to-use user-oriented management model that’s been almost completely absent from iOS to date.

The good news is that this is a very nice and user-friendly solution. It’s something non-IT folks can setup and manage easily – perfect for teachers, librarians, hospitality managers at hotels or restaurants, and the overworked “computer guy” in most small businesses. Apple has really been staking out territory in the small business market, and this is a perfect solution for that market.

The bad news is that although it provides a lot of powerful features and workflows, it really doesn’t scale all that well. The  fact that management involves physically connecting those devices really limits the size and type of organization for which it will be effective. Apple Configurator really pales when compared to MDM solutions that can automate the management process almost completely, do so wirelessly, can and scale to handle thousands or tens of thousands of iOS devices (along with other mobile platforms like Android and BlackBerry). It even falls short when compared to Apple’s own Profile Manager feature in Lion Server. It also seems like a solution really aimed at just iPads (and maybe iPod touches) rather than iPhones.

## Download

[App Store Link](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344?mt=12)

### Steps

1. First you will need to prepare your iPads. You'll give them a name, mark them supervised, update the IOS and set up profiles.
2. From preferences you can lock the home screen to show the iPad's name.
3. Click on the `+` to create a new profile. I think it's best to create separate profiles for things like wifi, emails, and specific subjects. Each iPad can have numerous profiles installed.
4. Name the profile.
5. Keep the security set for `Always`, it can be reset easily.
6. The main aspect of a profile is setting up the restrictions. These are checked or unchecked according to your administrator specifics and the teachers plan for using the iPads.
7. Check `allow installing applications` so we can install applications with Configurator.
8. Don't forget the Applications tab under restrictions. This is a way to totally take YouTube and the iTunes store off the iPad.
9. The Media Content tab lets you set restrictions for age appropriate applications, movies and tv shows. Caution: some good applications maybe blocked if you set the age too low. Side by Side is set as mature.
10. Emailing the product from many Apps is the easiest way to have a record for assessing and printing. Generic email addresses can be set up with a profile.
11. You can set up web clips under profiles. These are shortcuts to web sites that pull up like applications with an icon on the desktop.
12. Once you have your profiles setup you are ready to connect the iPads and prepare them. After the initial prepare, you should be able to now do everything through the Supervise tab.
13. I suggest setting up different groups for things like iPads for certain subject areas or grade levels. I also set up groups for my email accounts.
14. You will need to log into iTunes and download any and all applications you might possibly want on the iPads. When applications need updating, the easiest thing is to go in and re-download them.
15. To pull the applications into Configurator you click on the `+` and go to the `mobile applications` folder. Then you will double click on each application.
16. Check the applications you want to install on the iPads that you will connect. This is an area Apple needs to improve. As far as I know, there is no way to save the checked applications connected to one profile.
17. Apple will recommend that you setup "one perfect" iPad with the applications and settings that you want then create a backup of that iPad. You will then use that backup to "restore" the rest of your iPads
18. If you Restore from a backup just be aware that some applications will save the data into the backup and some won't.
