#!/bin/bash

CONFIG_FILE="$HOME/.aws/credentials"

[[ -d /output ]] && rm -Rf ./output
mkdir -p output

for profile in $(awk '/^\[/ { gsub("]", ""); print $1 }' < $CONFIG_FILE); do
    echo "Current ${profile:1}"
    aws ec2 describe-images  --filters "Name=block-device-mapping.volume-type,Values=gp2,gp3"  "Name=is-public,Values=false" --profile="${profile:1}" --region=ap-south-1 > ./output/${profile:1}.json  
done
