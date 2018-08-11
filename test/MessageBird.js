import { expect } from 'chai'
import httpMocks from 'node-mocks-http'
import mbRouter from '../routes'

describe('Messagebird Services Router', () => {
  it('should handle get request for balance', () => {
      const mockRequest = httpMocks.createRequest({
          method: 'GET',
          url: '/api/balance'
      })
      const mockResponse = httpMocks.createResponse()

      mbRouter(mockRequest, mockResponse)

      const actualResponseBody = mockResponse._getData()
      const expectedResponseBody = {
          success: true,
          data: {
            payment: 'prepaid',
            type: 'credits',
            amount: 8
          }
      }

      console.log(">>>>>>>>", JSON.stringify(actualResponseBody, null, 2))
      
  })
})
