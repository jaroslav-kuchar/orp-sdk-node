#!/bin/bash

SERVER="http://127.0.0.1:8080"

# error
echo "Error:"
curl -d "type=error_notification" --data-urlencode 'body={"timestamp": 1390475754493, "code": 408 }' ${SERVER}
echo ""

# event
echo "Event:"
curl -d "type=event_notification" --data-urlencode 'body={}' ${SERVER}
echo ""

# item 
echo "Items:"
for (( i=1 ; $i-20 ; i=$i+1 ))
do curl -d "type=item_update" --data-urlencode 'body={"id": '"$i"', "domainid": 11}' ${SERVER}
done

for (( i=1 ; $i-15 ; i=$i+1 ))
do curl -d "type=item_update" --data-urlencode 'body={"id": '"$i"', "domainid": 21}' ${SERVER}
done

echo ""

# recommendation
echo "Recommendations:"
curl -d "type=recommendation_request" --data-urlencode 'body={"context":{"simple":{"25":1,"27":11}},"limit":3}' ${SERVER}
echo ""
curl -d "type=recommendation_request" --data-urlencode 'body={"context":{"simple":{"25":1,"27":21}},"limit":5}' ${SERVER}
echo ""