import * as fishingMethodQueries from 'src/queries/shared/fishingMethods/fishingMethods'
import { MOCK_STORE_FISHING_METHODS, MOCK_STORE_SELLER_PRODUCT, renderHook } from 'src/testing'
import { SellerProduct } from 'src/types'
import { getNewEntitiesOptions } from 'src/utils'

import useSellerFishingMethods from './useSellerFishingMethods'

describe('useFishingMethodOptions() ', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should return no fishing methods, given no product id', () => {
    const { result } = renderHook(() => useSellerFishingMethods({}))

    expect(result.current.fishingMethodOptions).toBe(undefined)
  })

  it('should return an empty array of options, given a product id from a product without fishing methods', () => {
    const sellerProduct: SellerProduct = {
      ...MOCK_STORE_SELLER_PRODUCT,
      fishingMethodIds: [],
    }

    jest.spyOn(fishingMethodQueries, 'useFishingMethodsQuery').mockReturnValue({ data: [] } as any)

    const { result } = renderHook(() =>
      useSellerFishingMethods({ productId: sellerProduct.productId })
    )

    expect(result.current.fishingMethodOptions).toEqual([])
  })

  it('should eventually return a list of fishing methods on success, given a seller product id from a product with fishing methods', () => {
    const sellerProduct: SellerProduct = {
      ...MOCK_STORE_SELLER_PRODUCT,
      fishingMethodIds: MOCK_STORE_FISHING_METHODS.map(({ id }) => id),
    }
    const data = getNewEntitiesOptions(MOCK_STORE_FISHING_METHODS)

    jest.spyOn(fishingMethodQueries, 'useFishingMethodsQuery').mockReturnValue({ data } as any)

    const { result } = renderHook(() =>
      useSellerFishingMethods({ productId: sellerProduct.productId })
    )

    expect(result.current.fishingMethodOptions).toEqual(data)
  })
})
