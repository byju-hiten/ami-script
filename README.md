## Script to generate AMI having Volume Type g2 or g3 or both. 
#### Generates .xlsx which contains AMI ImageId, ImageName, VolumeType and Owner. 

## Installation

```
npm i
```

## Run the script

```
chmod +x ./image-script.sh
npm run build
```

## Working
- Pulls every profile from ~/.aws/credentials and fetch the private images assosciated with the profile. Processes the data and creates a .xlsx file from it.
- Work on region-ap-south-1 . To change the region edit [image-script.sh]()

## ToDo 
- [ ] Add cmd line argument for specific region or profile.


