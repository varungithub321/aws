# import 
import boto3
from boto3.dynamodb.conditions import Key 

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')   

# set table
    table = dynamodb.Table('Users')
    toDos = table.query(KeyConditionExpression=Key('Type').eq('ToDo'))
    return toDos["Items"]

result = lambda_handler(None, None) 
print(result)