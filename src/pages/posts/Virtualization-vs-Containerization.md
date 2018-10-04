---
featured: false
intro: false
title:  "Virtualization vs. Containerization"
uniqueID: "virtualizationVSContainerization"
description:  "Stuck between deciding whether Docker and Vagrant is the right approach for your project? Hopefully, this comparison can help."
shortName: "🔌"
banner: ""
date: 2017-09-10
tags: ["vagrant", "docker", "continuous-delivery"]
---

## Background Information

When I started my projects and sites, I was lost between the many tools that can help me achieve continuous delivery.

### Continuous Delivery

> Continuous delivery is a software engineering approach in which teams produce software in short cycles, ensuring that the software can be reliably released at any time. It aims at building, testing, and releasing software with greater speed and frequency.

[Read more...](https://en.wikipedia.org/wiki/Continuous_delivery)

## Our Options

The main difference comes from the vastly different method used to achieve some sort of separation within a physical machine. Docker relies on containerization, while Vagrant utilizes virtualization. What’s the difference?

### Virtualization

With virtualization, each virtual machine runs its own entire operating system inside a simulated hardware environment provided by a program called hypervisor running on the physical hardware.

This approach has its advantages and drawbacks. To mention the most obvious ones:

* **PRO**: the near-complete separation between the virtual machine(s) and the host enables you to have Linux virtual machines on a Windows host or vice versa.

* **CON**: you have to dedicate a static amount of resources (CPU, RAM, storage) to the virtual machines, and the hypervisor will eat up a lot of resources (this is usually referred to as overhead)

Virtualization is widely used, it’s the go-to technology of cloud infrastructures.

### Containerization

Containerization allows multiple applications to run in isolated partitions of a single Linux kernel running directly on the physical hardware. Linux CGroups and namespaces are the underlying Linux kernel technologies used to isolate, secure and manage the containers.

* **PRO**: Performance is higher than virtualisation since there is no hypervisor overhead, and you are closer to the bare metal. Also the container simply uses whatever resources it needs, period.

* **CON**: Containers use the host machine’s kernel. No funny Windows stuff on a Linux host.
