export function generateExampleForSwagger( statusCode: number, data: object )
{
    return {
        status: statusCode >= 400 ? 'error' : 'success',
        statusCode: statusCode,
        timestamp: Date.now(),
        data: data,
    }
}