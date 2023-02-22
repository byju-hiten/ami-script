## Script to generate AMI having Volume Type g2 or g3 or both. 
#### Generates .xlsx which contains AMI ImageId, ImageName, VolumeType and Owner. 

## Requirements 
```
node & npm
aws-cli
```
Links to download - 
- [aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [node official page](https://nodejs.org/en/download/) or install nvm.

Add credentials of all profiles to ~/.aws/credentials . For more information about [aws profiles](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)

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
- Current region is set to mumbai-ap-south-1 . To change the region edit [image-script.sh](https://github.com/byju-hiten/ami-script/blob/main/image-script.sh)

## ToDo 
- [ ] Add cmd line argument for specific region or profile.


