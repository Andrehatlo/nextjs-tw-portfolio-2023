---
title:  "Home Assistant - HA & PI: Step 1"
metaTitle:  "Home Assistant - HA & PI: Step 1"
metaDesc: "Automating my home with home assistant and raspberry pi. How to install HA on the Raspberry Pi 3 B+ ?"
socialImage: '/images/old-images/ha1.png'
date: "2020-02-01"
tags:
    - RaspberryPi
    - HomeAssistant
---

There are almost 8.4 billion internet of things (IoT) across the world right now. The number of devices are expected to more than double the next couple of years to the stage of 20.4 billion in 2020. The problem with all these devices are that each and every brand of smart device has their own gateway and platform to automate and control. This is where Home Assistant steps in.


Home assistant is an open source platform where all your digital smart things can talk to each other. Implemented with an raspberry pi, you can shedual or command events for your smart devices (events as turn up heat when cold outside, or dim lights after 21:00).


Home assistant can run on any always connected operating system that supports Python 3 apps, and its very lightweight and small. Which makes it great to run on a Raspberry Pi.

My smart devices range from:

- IKEA tradfri
  - Bulbs
  - Motion sensor
  - Gateway
- Philips hue bulbs and motion detectors
  - Bulbs
  - Motion sensor
  - Temperature sensor
  - Light sensor
  - Gateway
- Sonos
  - Two speakers
- Gooogle Cast
  - Livingroom tv with Android OS
  - Nvidea Shield on my bedroom tv
- Z-wave
  - Door/Window sensor
  - USB gateway

To create a setup where all these different brands of devices can talk to each other i'll create a new home automation server on my Raspberry Pi 3B+.

Follow this guide for a easy setup. And follow my blog for more information, ideas and guides for Home Assistant that i will post in the near future!

## Requirements:
<center>
  <img src='https://cdn.instructables.com/FFU/VNV0/IY4Q7ROG/FFUVNV0IY4Q7ROG.LARGE.jpg' height="70%" width="70%"/>
</center>
<br>

- Raspberry Pi 3B+ (Recommended)
- Micro SD (At least 32gb)
- [Raspbian (Stretch light)](https://www.raspberrypi.org/downloads/raspbian/) installed on micro sd card


## Installing Home Assistant on raspbian

### Enable SSH

Assuming raspbian is already installed on the raspberry pi.

Make sure your connected to your local network, control by running `ifconfig`.

Activate SSH on the raspberry pi by running `sudo raspi-config` in the terminal window.

Then select `Interfacing Options`.

Navigate to `SSH` and select it.

Choose `Yes` and select `Ok`.

Then choose `Finish`.

### Connect by SSH and install HA

To connect to your Raspberry Pi over SSH run the following command in terminal.

```
# Default password is: raspberry
$ ssh pi@piaddress
```

Change the default password by running:

```
$ passwd
```

Update your pi:

```
$ sudo apt-get update
$ sudo apt-get upgrade -y
```

Install dependencies:

```
$ sudo apt-get install python3 python3-venv python3-pip libffi-dev libssl-dev
```

Add a homeassistant user with groups `dialout` and `gpio`. Dialout is required for using Z-Wave and Zigbee controllers, while GPIO is required to communicate with Raspberry's GPIO.

```
$ sudo useradd -rm homeassistant -G dialout,gpio
```

Create a directory for the installation in `/srv` directory and set owner permissions to the `homeassistant` account:

```
$ cd /srv
$ sudo mkdir homeassistant
$ sudo chown homeassistant:homeassistant homeassistant
```

Then create and change to a virtual environment for Home assistant as the `homeassistant` account:

```
$ sudo -u homeassistant -H -s
$ cd /srv/homeassistant
$ python3 -m venv .
$ source bin/activate
```

Once the virtual environment is activated, run the following command to install a required python package:

```
$ (homeassistant) homeassistant@raspberrypi:/srv/homeassistant $ python3 -m pip install wheel
```

Last but not least, install Home Assistant:

```
$ (homeassistant) homeassistant@raspberrypi:/srv/homeassistant $ pip3 install homeassistant
```

To complete the installation, start Home Assistant for the first time.

```
(homeassistant) $ hass
```

This will create the `.homeassistant` directory under the `home/homeassistant` directory.

If the installation was successful you can reach the Home Assistant web interface on http://ipaddress:8121.

## Autostart Home Assistant on boot

Since the raspberry pi will host the Home Assistant server i would like to create a deamon that autostarts Home Assistant on boot.

A service file is needed to control Home Assistant with `systemd`.

Create the template below with `sudo` rights with the following path `/etc/systemd/system/home-assistant@homeassistant.service`.

```
# /etc/systemd/system/home-assistant@homeassistant.service

[Unit]
Description=Home Assistant
After=network-online.target

[Service]
Type=simple
User=%i
ExecStart=ExecStart=/srv/homeassistant/bin/hass -c "/home/%i/.homeassistant"

[Install]
WantedBy=multi-user.target
```

Now reload `systemd` to make the deamon aware of the new configuration.

```
$ sudo systemctl --system daemon-reload
```

Enable the home assistant service to automatically start on boot:

```
$ sudo systemctl enable home-assistant@homeassistant.service
```

To start the service run this command:

```
$ sudo systemctl start home-assistant@homeassistant.service
```

Now go to your Home Assistant web interface by going to http://ipaddress:8123.

Next time we will show how to setup your smart devices in HA and configure them so that you can access them all.

Follow my blog for more information, ideas and guides for Home Assistant that i will post in the near future!


# Want more?
## Get familiar with Home Assistant by reading the [docs](https://www.home-assistant.io/docs/)!
