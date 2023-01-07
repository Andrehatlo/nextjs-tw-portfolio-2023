---
title: "Home Assistant - Configuring devices: Step 2"
metaTitle: "Home Assistant - Configuring devices: Step 2"
metaDesc: "Going through the fundamentals of the Home Assistant web interface, and how to add/configure smart devices in your network with HA"
socialImage: "/images/old-images/ha1.png"
date: "2020-03-01"
tags:
    - RaspberryPi
    - HomeAssistant
---

If you haven't seen my last post on how to install Home Assistant on a Rapsberry Pi, follow [this](https://www.andrehatlo.com/home-assinstant-and-rapsberry-pi-3-step-1/) link before starting with this section.

## Requirements

- Successfully installed Home assistant on a Raspberry Pi
- Some type of smart device and gateway connected to your network

## Configuration of devices:

Go to your HA web interface by typing http://ipaddress:8123 in your browser.

The main menu will look something like this:

### The `Main menu`

<br>
<center>
  <img src="/assets/images/ha-step2/main-menu.png" height="40%" width="40%">
</center>
<br/>

- **Overview**
  - This is where your UI exists.
- **Map**
  - HA has a map interface for tracking and estimating time.
- **Logbook**
  - Here HA logs all events that happen in your smart home.
- **History**
  - Check out your sensors/devices/places history, how they act over time.
- **MDI Icon Index**
  - This is a custom icon page i added, i will get back to this and show you how this is done.
- **Configuration**
  - Everything you can do with HA gets configured here.

### The `Configuration` menu

Select `configuration` in the `main menu`.

You will see a menu that looks something like this:

<center>
  <img src="/assets/images/ha-step2/conf-menu-1.png" height="70%" width="70%">
</center>
<br/>

- **Home Assistant Cloud**

  - Sign up for the HA Cloud service, this makes it possible to use your interface from all around the world. Without any port forwarding.

- **Integrations**

  - All new devices on your network has to get setup here before anything else.

- **Users**

  - Add user accounts that can access HA web interface here.

- **General**

  - Here you can restart your server/core/groups/automations/scripts and validate your configuration files for quick debugging.

- **Persons**

  - Add people and connect them to the user account you would like.

- **Entity Registry**

  - An overview over all devices. Also possible to override naming for each device.

- **Area Registry**

  - Define the places in your home. For example bathroom, kitchen, livingroom etc. These places can then be assigned to each of your devices.

- **Automation**

  - Here is where the magic happens. Where you can automate your smart devices as you see fit. Turn off all lights after 23:00 or set the temperature up after 07:00.

- **Script**

  - Script actions to be used in Lovelace UI. For example create a `restart HA` script that calls action `homeassistant.restart` so you can easily restart the server from your UI.

- **Z-Wave**

  - You will probably not have this in your configuration unless you've activated z-wave in your `configration.yaml` file. Here is where you can add Z-wave nodes and configure them.

- **Customization**
  - Tweak entity attributes or add/edit customizations that override the enities attributes.

## `Integrations`

In the configuration menu, go to `Integrations`.

Under `Discovered` you'll see all devices Home Assistant can find on your network.

<center>
  <img src="/assets/images/ha-step2/int-discovered-device.png" height="80%" width="80%">
</center>
<br/>

Home assistant has made integrating devices as easy as pie. Just hit the button `CONFIGURE` and follow the steps:

### IKEA tradfri integration

Click `CONFIGURE` next to IKEA TRÅDFRI.

<center>
  <img src="/assets/images/ha-step2/ikea-gw.png" height="80%" width="80%">
</center>
<br/>

Fill inn the `Security Code` from underneath your IKEA Trådfri Gateway.

<center>
  <img src="/assets/images/ha-step2/ikea-gw-pw.png" height="60%" width="60%">
</center>
<br/>

Click `Submit` and accept the list of IKEA Trådfri devices HA lists up.

### Phillips hue integration

Click `CONFIGURE` next to Philips Hue.

<center>
  <img src="/assets/images/ha-step2/philips-gw.png" height="80%" width="80%">
</center>
<br/>

Locate your Philips gateway and press the button located on topp of the gateway.

Then accept all devices HA lists up in the next step.

### Back in `Integrations`

You should now have a list of devices depending on what you have configured from integrations.

This is what my list looks like:

<center>
  <img src="/assets/images/ha-step2/configured-devices.png" height="80%" width="80%">
</center>
<br/>

## Developer tools

Underneath the Main menu you will see the `Developer tools`, this is worth mentioning since it will be used a lot during the device automation/configuration stage.

<center>
  <img src="/assets/images/ha-step2/dev-tools.png" height="40%" width="40%">
</center>
<br/>

- Services (remote control icon)

  - Here its possible to run/test all services that HA has integrated.

- States (< > icons)

  - This is the place to have total control over ALL your entities.
  - Check if their online, or if they exist at all.

- Events (radio tower icon)

  - I havent personally used this function much, but as far as i know this is the place to run events.

- Templates (document <> icon)

  - When doing advanced configuration with HA, its possible to create templates that act as sensors. This is the place to test your tempates and see if you get the return values your looking for.

- About (info icon)
  - The place to check your HA version or to check what the HA log is outputting.

Hope this gives a better understanding of the fundamentals of HA and how to configure devices on your network.

# Want more?

## Get familiar with Home Assistant by reading the [docs](https://www.home-assistant.io/docs/)!
