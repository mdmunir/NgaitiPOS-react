# NgaiTiPOS dengan react-native

## Instalasi
Persiapan yang dibutuhkan antara lain:
* Android SDK (googling)
* node js (googling)
* react-native package (install dari npm)

Untuk dapat menjalankan aplikasi di device, kita harus mendaftarkan device kita ke adb.

## Plug in your device via USB
Let's now set up an Android device to run our React Native projects. Go ahead and plug in your device via USB to your development machine.

Next, check the manufacturer code by using lsusb (on mac, you must first install lsusb). lsusb should output something like this:

```
$ lsusb
Bus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 003: ID 22b8:2e76 Motorola PCS
Bus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
These lines represent the USB devices currently connected to your machine.
```

You want the line that represents your phone. If you're in doubt, try unplugging your phone and running the command again:

```
$ lsusb
Bus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```
You'll see that after removing the phone, the line which has the phone model ("Motorola PCS" in this case) disappeared from the list. This is the line that we care about.
```
Bus 001 Device 003: ID 22b8:2e76 Motorola PCS
```
From the above line, you want to grab the first four digits from the device ID:
```
22b8:2e76
```
In this case, it's 22b8. That's the identifier for Motorola.

You'll need to input this into your udev rules in order to get up and running:
```
echo SUBSYSTEM=="usb", ATTR{idVendor}=="22b8", MODE="0666", GROUP="plugdev" | sudo tee  etc/udev/rules.d/51-android-usb.rules
```
Make sure that you replace 22b8 with the identifier you get in the above command.

Now check that your device is properly connecting to ADB, the Android Debug Bridge, by running adb devices.
```
$ adb devices
List of devices attached
emulator-5554 offline   # Google emulator
14ed2fcc device         # Physical device
```
Seeing device in the right column means the device is connected. You must have only one device connected at a time.

## Code and Compile
Kalau tool-tool-nya sudah siap, berikutnya adalah mengclone project.
```
$ git clone https://github.com/mdmunir/NgaitiPOS-react ngaitipos
$ cd ngaitipos
$ npm install
$ react-native run-android
$ react-native start
```