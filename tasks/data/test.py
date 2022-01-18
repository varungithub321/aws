import json

def lambda_handler(event, context):
    # TODO implement
    return {
        'statusCode': 200,
        'name': 'Varun',
        'body': json.dumps('Hello from Lambda!')
    }
result = lambda_handler(None, None) 
print(result)