---
featured: true
intro: false
title:  "Virtualization vs. Containerization"
uniqueID: "virtualizationVSContainerization"
description:  "Stuck between deciding whether Docker or Vagrant is the right approach for your project? Hopefully, this comparison can help."
shortName: "🔌"
banner: ""
date: 2016-09-10
tags: ["vagrant", "docker", "continuous-delivery"]
---

## Continuous Delivery

When I started my projects and sites, I was lost between the many tools that can help me achieve continuous delivery.

> Continuous delivery is a software engineering approach in which teams produce software in short cycles, ensuring that the software can be reliably released at any time. It aims at building, testing, and releasing software with greater speed and frequency.

[Read more...](https://en.wikipedia.org/wiki/Continuous_delivery)

## The Difference

The main difference comes from the vastly different method used to achieve some sort of separation within a physical machine. Docker relies on containerization, while Vagrant utilizes virtualization. What’s the difference?

### Virtualization

With virtualization, each virtual machine runs its own entire operating system inside a simulated hardware environment provided by a program called hypervisor running on the physical hardware.

<img class="center" src="https://qph.fs.quoracdn.net/main-qimg-9ce96f321f97af6ee58b0c79501c86ab.webp">

Virtualization is the technique of importing a Guest operating system on top of a Host operating system. This technique was a revelation at the beginning because it allowed developers to run multiple operating systems in different virtual machines all running on the same host. This eliminated the need for extra hardware resource.

##### Pros
* A near-complete separation between the virtual machine(s) and the host enables you to have Linux virtual machines on a Windows host or vice versa.
* From a beginners' standpoint it was easier for me to get started
* It was also easier to debug, but that is probably more due to my more novice understanding of kernels.
* Virtualization is widely used, it’s the go-to technology of cloud infrastructures.
* Multiple operating systems can run on the same machine
* Maintenance and Recovery were easy in case of failure conditions
* Total cost of ownership was also less due to the reduced need for infrastructure

<br />

##### Cons
* I had to dedicate a static amount of resources (CPU, RAM, storage) to the virtual machines, and the hypervisor will eat up a lot of resources (overhead)
* There are only a few stable hosting services that provide out-of-the-box hosting solutions.
* Running multiple Virtual Machines leads to unstable performance
* Hypervisors are not as efficient as the host operating system
* Boot up process is long and takes time

These drawbacks led to the emergence of a new technique called Containerization.

### Containerization

Containerization is the technique of bringing virtualization to the operating system level. While Virtualization brings abstraction to the hardware, Containerization brings abstraction to the operating system. Do note that Containerization is also a type of Virtualization. Containerization is however more efficient because there is no guest OS here and utilizes a host’s operating system, share relevant libraries & resources as and when needed unlike virtual machines. Application specific binaries and libraries of containers run on the host kernel, which makes processing and execution very fast. Even booting-up a container takes only a fraction of a second. Because all the containers share, host operating system and holds only the application related binaries & libraries. They are lightweight and faster than Virtual Machines.


<img class="center" src="https://qph.fs.quoracdn.net/main-qimg-5305ffe82589a2f061838eb3389691e9.webp">

##### Pros
* Performance is higher than virtualization since there is no hypervisor overhead, and you are closer to the bare metal. Also the container simply uses whatever resources it needs, period.
* Containers on the same OS kernel are lighter and smaller
* Better resource utilization compared to VMs
* Boot-up process is short and takes few seconds

##### Cons
* Containers use the host machine’s kernel. Not really extendable to Windows Enterprise.
* As I mentioned, I am a bit of a newb in the realms of DevOps.

## Next

From what I read, Docker is far more superior than Vagrant, in terms of scaleability and reliability, I intend to use Docker in an upcoming project to better understand it. I'll keep you posted 😉. See what I did there.

[Read the extended version here...](https://www.quora.com/What-is-the-difference-between-containerization-Docker-and-virtualization-VMWare-VirtualBox-Xen)
