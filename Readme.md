# exif

Image meta-information (EXIF, IPTC, XMP...) extraction using [exiftool](http://www.sno.phy.queensu.ca/~phil/exiftool/)

__NOTE__: This fork from https://github.com/visionmedia/node-exif has a DIFFERENT (better !) API.
 It uses [precise tags](http://www.sno.phy.queensu.ca/~phil/exiftool/TagNames/index.html) for field access.

## Installation

    $ npm install Yvem/node-exif

### Example

```js
var exif = require('exif2');

exif(file, function(err, obj){
  console.log(obj);

  // see available tags http://www.sno.phy.queensu.ca/~phil/exiftool/TagNames/index.html
  console.log(o['FileName']);
  console.log(o['Caption-Abstract']); // IPTC Caption [2,120]
})
```

```json
{
	"SourceFile": "test/fixtures/forest.jpeg",
	"ExifToolVersion": 9.13,
	"FileName": "forest.jpeg",
	"Directory": "test/fixtures",
	"FileSize": "497 kB",
	"FileModifyDate": "2014:03:24 14:08:06+01:00",
	"FileAccessDate": "2014:03:24 15:27:05+01:00",
	"FileInodeChangeDate": "2014:03:24 15:26:50+01:00",
	"FilePermissions": "rw-r--r--",
	"FileType": "JPEG",
	"MIMEType": "image/jpeg",
	"CurrentIPTCDigest": "108d7872862d3e210ac6418bc7b5d6b2",
	"Caption-Abstract": "Voilà l'été !",
	"CopyrightNotice": "©photo : John Smith",
	"JFIFVersion": 1.01,
	"ExifByteOrder": "Big-endian (Motorola, MM)",
	"PhotometricInterpretation": "Color Filter Array",
	"Make": "NIKON CORPORATION",
	"Model": "NIKON D7000",
	"Orientation": "Horizontal (normal)",
	"XResolution": 72,
	"YResolution": 72,
	"ResolutionUnit": "inches",
	"Software": "Pixelmator 2.1.1",
	"ModifyDate": "2012:10:08 19:10:63",
	"ExposureTime": "1/80",
	"FNumber": 5.6,
	"ExposureProgram": "Aperture-priority AE",
	"ISO": 500,
	"DateTimeOriginal": "2012:10:07 11:36:30",
	"CreateDate": "2012:10:07 11:36:30",
	"ExposureCompensation": -2,
	"MaxApertureValue": 4,
	"MeteringMode": "Multi-segment",
	"LightSource": "Unknown",
	"Flash": "Off, Did not fire",
	"FocalLength": "10.0 mm",
	"UserComment": "",
	"SubSecTime": 50,
	"SubSecTimeOriginal": 50,
	"SubSecTimeDigitized": 50,
	"ColorSpace": "sRGB",
	"ExifImageWidth": 1971,
	"ExifImageHeight": 1306,
	"SensingMethod": "One-chip color area",
	"CustomRendered": "Normal",
	"ExposureMode": "Auto",
	"WhiteBalance": "Auto",
	"DigitalZoomRatio": 1,
	"FocalLengthIn35mmFormat": "15 mm",
	"SceneCaptureType": "Standard",
	"GainControl": "Low gain up",
	"Contrast": "Normal",
	"Saturation": "Normal",
	"Sharpness": "Normal",
	"SubjectDistanceRange": "Unknown",
	"ProfileCMMType": "Lino",
	"ProfileVersion": "2.1.0",
	"ProfileClass": "Display Device Profile",
	"ColorSpaceData": "RGB ",
	"ProfileConnectionSpace": "XYZ ",
	"ProfileDateTime": "1998:02:09 06:49:00",
	"ProfileFileSignature": "acsp",
	"PrimaryPlatform": "Microsoft Corporation",
	"CMMFlags": "Not Embedded, Independent",
	"DeviceManufacturer": "IEC ",
	"DeviceModel": "sRGB",
	"DeviceAttributes": "Reflective, Glossy, Positive, Color",
	"RenderingIntent": "Perceptual",
	"ConnectionSpaceIlluminant": "0.9642 1 0.82491",
	"ProfileCreator": "HP  ",
	"ProfileID": 0,
	"ProfileCopyright": "Copyright (c) 1998 Hewlett-Packard Company",
	"ProfileDescription": "sRGB IEC61966-2.1",
	"MediaWhitePoint": "0.95045 1 1.08905",
	"MediaBlackPoint": "0 0 0",
	"RedMatrixColumn": "0.43607 0.22249 0.01392",
	"GreenMatrixColumn": "0.38515 0.71687 0.09708",
	"BlueMatrixColumn": "0.14307 0.06061 0.7141",
	"DeviceMfgDesc": "IEC http://www.iec.ch",
	"DeviceModelDesc": "IEC 61966-2.1 Default RGB colour space - sRGB",
	"ViewingCondDesc": "Reference Viewing Condition in IEC61966-2.1",
	"ViewingCondIlluminant": "19.6445 20.3718 16.8089",
	"ViewingCondSurround": "3.92889 4.07439 3.36179",
	"ViewingCondIlluminantType": "D50",
	"Luminance": "76.03647 80 87.12462",
	"MeasurementObserver": "CIE 1931",
	"MeasurementBacking": "0 0 0",
	"MeasurementGeometry": "Unknown (0)",
	"MeasurementFlare": "0.999%",
	"MeasurementIlluminant": "D65",
	"Technology": "Cathode Ray Tube Display",
	"RedTRC": "(Binary data 2060 bytes)",
	"GreenTRC": "(Binary data 2060 bytes)",
	"BlueTRC": "(Binary data 2060 bytes)",
	"XMPToolkit": "XMP Core 4.4.0",
	"Subject": "",
	"SerialNumber": 5044750,
	"Lens": "Sigma 10-20mm F4-5.6 EX DC HSM",
	"ImageNumber": 6069,
	"FlashCompensation": 0,
	"ImageWidth": 900,
	"ImageHeight": 596,
	"EncodingProcess": "Baseline DCT, Huffman coding",
	"BitsPerSample": 8,
	"ColorComponents": 3,
	"YCbCrSubSampling": "YCbCr4:4:4 (1 1)",
	"Aperture": 5.6,
	"ImageSize": "900x596",
	"ScaleFactor35efl": 1.5,
	"ShutterSpeed": "1/80",
	"SubSecCreateDate": "2012:10:07 11:36:30.50",
	"SubSecDateTimeOriginal": "2012:10:07 11:36:30.50",
	"SubSecModifyDate": "2012:10:08 19:10:63.50",
	"CircleOfConfusion": "0.020 mm",
	"FOV": "100.4 deg",
	"FocalLength35efl": "10.0 mm (35 mm equivalent: 15.0 mm)",
	"HyperfocalDistance": "0.89 m",
	"LensID": "Unknown (809257734)",
	"LightValue": 9
}
```

## Test

```bash
npm install
npm test
````

## License 

  MIT
